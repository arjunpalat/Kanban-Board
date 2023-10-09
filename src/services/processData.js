const processData = (rawData, group, order) => {
    let finalDataObj = {};
    if (order === "priority") {
        rawData?.tickets.sort((obj1, obj2) => obj1.priority < obj2.priority);
    }
    const statusListObj = {
        "Backlog": { grpName: "Backlog", presentTickets: [] },
        "Todo": { grpName: "Todo", presentTickets: [] },
        "In progress": { grpName: "In progress", presentTickets: [] },
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
        finalDataObj = {userObj: userListObj, ticketObj: groupData(userListObj, rawData, group), grp: group};
    }
    else if(group === "priority")
    {
        finalDataObj = {userObj: userListObj, ticketObj: groupData(priorityListObj, rawData, group), grp: group};
    }
    else
    {
        finalDataObj = {userObj: userListObj, ticketObj: groupData(statusListObj, rawData, group), grp: group};
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

export { processData };