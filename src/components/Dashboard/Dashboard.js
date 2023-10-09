import React, { useContext } from 'react';
import "./Dashboard.css";
import DashboardBox from '../DashboardBox/DashboardBox';
import { userData } from '../../App';

function Dashboard() {
  const { ticketObj } = useContext(userData);
  return (
    <div className="dashboard-container">
      {console.log("Rendered!")}
      {Object.keys(ticketObj).map((key) =>
        <DashboardBox key={key} id={key} name={ticketObj[key].grpName} ticketsArray={ticketObj[key].presentTickets} />
      )}
    </div>
  );
}

export default Dashboard;