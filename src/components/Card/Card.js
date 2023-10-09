import React, { useContext } from 'react';
import "./Card.css";
import { icons, getImage, getStatusIcon } from "../../constants/icons";
import { userData } from '../../App';

const Card = ({ ticketDetails }) => {
   const { userObj, displayGroup } = useContext(userData);
   const title = (ticketDetails.title.length > 70) ? ticketDetails.title.substr(0, 70) + "..." : ticketDetails.title;
   return (
      <div className="card-container">
         <div className="card-id-title">
            <div className="card-id">
               <span>{ticketDetails.id}</span>
               {(displayGroup !== "userId") && <div className="card-img-container">
                  {getImage(userObj[ticketDetails.userId].grpName)}
                  {getStatusIcon(userObj[ticketDetails.userId].available)}
               </div>}
            </div>
            <div className="card-title">
               {(displayGroup !== "status") && <span>{icons[ticketDetails.status]}</span>}
               <span>{title}</span>
            </div>
         </div>
         <div className="card-category-tag">
            {(displayGroup !== "priority") && <span className="card-category">{icons[ticketDetails.priority]}</span>}
            {ticketDetails.tag.map((tagName, index) => <span key={index} className="card-tag">
               {icons["Feature"]}
               {tagName}
            </span>)}
         </div>
      </div>
   );
}

export default Card;