import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import { fetchData } from "./services/fetchFromAPI";
import { useEffect, useState, createContext } from "react";
import { processData } from "./services/processData";

export const userData = createContext(null);

function App() {

  const [displayGroup, setDisplayGroup] = useState(localStorage.getItem("displayGroup") || "status");
  const [displayOrder, setDisplayOrder] = useState(localStorage.getItem("displayOrder") || "priority");
  const [processedData, setProcessedData] = useState({});
  const [fetchedData, setFetchedData] = useState(null);

  const onDisplaySelectChange = (value, isGroup) => {
    if (isGroup) {
      localStorage.setItem("displayGroup", value);
      setDisplayGroup(value);
      setProcessedData(processData(fetchedData, value, displayOrder));
    }
    else {
      localStorage.setItem("displayOrder", value);
      setDisplayOrder(value);
      setProcessedData(processData(fetchedData, displayGroup, value));
    }
  }

  useEffect(() => {
    const fetchNow = async () => {
      try {
        console.log("Fetching!");
        const newData = await fetchData(displayGroup, displayOrder);
        setFetchedData(newData);
        setProcessedData(processData(newData, displayGroup, displayOrder));
      } catch (error) {
        console.error("Unable to fetch data!");
      }
    };
    fetchNow();
  }, []);

  return (
    <div>
      <userData.Provider
        value={{
          ticketObj: processedData.ticketObj,
          userObj: processedData.userObj,
          displayGroup: processedData.grp
        }}
      >
        <NavBar displayOrder={displayOrder} displayGroup={displayGroup} onDisplaySelectChange={onDisplaySelectChange} />
        {console.log("Rendering App Components")}
        {(processedData.ticketObj) && <Dashboard />}
      </userData.Provider>
    </div>
  );
}

export default App;
