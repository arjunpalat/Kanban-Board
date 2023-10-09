const fetchDataAndProcess = async (group, order) => {
    try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const rawData = await response.json();

        const processedData = processData(rawData, group, order);

        return processedData;
    } catch (error) {
        console.error('Error fetching and processing data:', error);
        throw error;
    }
};
const processData = (rawData, group, order) => {
    let finalDataObj = {};
    if (order === "priority") {
        rawData?.tickets.sort((obj1, obj2) => obj1.priority < obj2.priority);
    }
    const statusListObj = {
        "Backlog": { grpName: "Backlog", presentTickets: [] },
        "Todo": { grpName: "Todo", presentTickets: [] },
        "In progress": { grpName: "In Progress", presentTickets: [] },
        "Done": { grpName: "Done", presentTickets: [] },
        "Cancelled": { grpName: "Cancelled", presentTickets: [] }
    };
    const priorityListObj = {
        0: { grpName: "No priority", presentTickets: [] },
        4: { grpName: "Urgent", presentTickets: [] },
        3: { grpName: "High", presentTickets: [] },
        2: { grpName: "Medium", presentTickets: [] },
        1: { grpName: "Low", presentTickets: [] }
    };    
    const userListObj = rawData.users.reduce((acc, userObj) => {
        acc[userObj.id] = { grpName: userObj.name, presentTickets: [], available: userObj.available};
        return acc;
    }, {});

    if(group === "userId")
    {
        finalDataObj = {userObj: userListObj, ticketObj: groupData(userListObj, rawData, group), isUser: true};
    }
    else if(group === "priority")
    {
        finalDataObj = {ticketObj: groupData(priorityListObj, rawData, group), userObj: userListObj, isUser: false};
    }
    else
    {
        finalDataObj = {ticketObj: groupData(statusListObj, rawData, group), userObj: userListObj, isUser: false};
    }
    return finalDataObj;
}

const groupData = (listObj, orderedData, group) => {
    const dataObj = listObj;
    for(let i=0; i<orderedData?.tickets?.length; i++)
    {
        const ticket = orderedData?.tickets[i];
        const attribute = ticket[group];
        dataObj[attribute].presentTickets.push(ticket);
    }
    return dataObj;
}
export { fetchDataAndProcess };