import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import { fetchDataAndProcess } from "./services/fetchFromAPI";
import { useEffect, useState } from "react";

function App() {

  const [displayGroup, setDisplayGroup] = useState(localStorage.getItem("displayGroup") || "status");
  const [displayOrder, setDisplayOrder] = useState(localStorage.getItem("displayOrder") || "priority");
  const [processedData, setProcessedData] = useState({});

  const onDisplaySelectChange = (value, isGroup) => {
    if(isGroup)
    {
      localStorage.setItem("displayGroup", value);
      setDisplayGroup(value);
    }
    else
    {
      localStorage.setItem("displayOrder", value);
      setDisplayOrder(value);
    }
  }

  useEffect(() => {
    const fetchNow = async () => {
      try {
        console.log("Fetching");
        const newData = await fetchDataAndProcess(displayGroup, displayOrder);
        setProcessedData(newData);
      } catch (error) {
        console.error("Unable to fetch data");
      }
    };
    fetchNow();
    }, [displayGroup, displayOrder]);
  

  return (
    <div>
      <NavBar displayOrder={displayOrder} displayGroup={displayGroup} onDisplaySelectChange={onDisplaySelectChange} />
      {(processedData.userObj) && <Dashboard ticketObj={processedData.ticketObj} userObj={processedData.userObj} isUser={processedData.isUser} />}
    </div>
  );
}

export default App;
