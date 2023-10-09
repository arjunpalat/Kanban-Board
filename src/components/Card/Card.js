import React from 'react';
import "./Card.css";
import { icons } from "../../constants/icons";
import { BsCircleFill } from "react-icons/bs";

const Card = ({ ticketDetails, userObj, isUser }) => {
   return (
      <div className="card-container">
         <div className="card-id-title">
            <div className="card-id">
               <span>{ticketDetails.id}</span>
               {!(isUser) && <div className="card-img-container">
                  <img src={`https://ui-avatars.com/api/?background=000000&format=svg&color=fff&name=${userObj[ticketDetails.userId].grpName}`} className="card-img" />
                  <BsCircleFill className="card-img-status" style={{ color: (userObj[ticketDetails.userId].available) ? "lightgreen" : "gray" }} />
               </div>}
            </div>
            <div className="card-title">
               <span>{(ticketDetails.title.length > 70) ? ticketDetails.title.substr(0, 70) + `...` : ticketDetails.title}</span>
            </div>
         </div>
         <div className="card-category-tag">
            <span className="card-category">{icons["Unknown"]}</span>
            <span className="card-tag">
               {icons["Feature"]}
               Feature Request
            </span>
         </div>
      </div>
   );
}

export default Card;