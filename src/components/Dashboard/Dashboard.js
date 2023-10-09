import React from 'react';
import "./Dashboard.css";
import DashboardBox from '../DashboardBox/DashboardBox';

function Dashboard({ userObj, ticketObj, isUser }) {
  return (
    <div className="dashboard-container">
      {Object.keys(ticketObj).map((key) =>
        <DashboardBox key={key} id={key} name={ticketObj[key].grpName} ticketsArray={ticketObj[key].presentTickets} userObj={userObj} isUser={isUser} />
      )}
    </div>
  );
}

export default Dashboard