import React from 'react';
import "./DashboardBox.css";
import Card from '../Card/Card';
import { icons } from "../../constants/icons";
import { BsCircleFill } from "react-icons/bs";

const DashboardBox = ({ id, name, ticketsArray, userObj, isUser }) => {
  return (
    <div className="dashboard-box-container">
     <div className="dashboard-box-category">
      <div className="dashboard-box-category-txt">
       {!(isUser) && icons[name]}
       {(isUser) &&
       <div className="card-img-container">
        <img src={`https://ui-avatars.com/api/?background=000000&format=svg&color=fff&name=${name}`} className="card-img" />
        <BsCircleFill className="card-img-status" style={{color: (userObj[id].available)? "lightgreen" : "gray"}} />
       </div>
       }
        {name}
        <span style={{color: "grey"}}>{` ${ticketsArray.length}`}</span>
      </div>
      <div className="dashboard-box-category-txt">
       {icons["Plus"]}
       {icons["Dots"]}
      </div>
     </div>
     <div className="dashboard-box-card-container">
      {ticketsArray.map((cardObj) =>
        <Card key={cardObj.id} ticketDetails={cardObj} userObj={userObj} isUser={isUser} />
      )}
     </div>
    </div>

  );
}

export default DashboardBox;