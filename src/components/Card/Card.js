import React, { useContext } from 'react';
import "./Card.css";
import { icons, getImage, getStatusIcon } from "../../constants/icons";
import { userData } from '../../App';

const Card = ({ ticketDetails }) => {
   const { userObj, displayGroup } = useContext(userData);
   const title = ticketDetails.title;
   return (
      <div className="card-container">
         {(displayGroup !== "userId") && <div className="card-img-container">
            {getImage(userObj[ticketDetails.userId].grpName)}
            {getStatusIcon(userObj[ticketDetails.userId].available)}
         </div>}
         <div className="card-ticketid">
            <span>{ticketDetails.id}</span>
         </div>
         <div className="card-status-title-container">
            {(displayGroup !== "status") && <span>{icons[ticketDetails.status]}</span>}
            <span className="card-title">{title}</span>
         </div>
         <div className="card-priority-tag-container">
            {(displayGroup !== "priority") && <div className="card-priority" style={{color: "gray"}}>{icons[ticketDetails.priority]}</div>}
            {ticketDetails.tag.map((tagName, index) => <span key={index} className="card-tag">
               {icons["Feature"]}
               <span>{tagName}</span>
            </span>)}
         </div>
      </div>

   );
}

export default Card;