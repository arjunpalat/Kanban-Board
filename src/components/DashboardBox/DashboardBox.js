import React, { useContext } from 'react';
import "./DashboardBox.css";
import Card from '../Card/Card';
import { icons, getImage, getStatusIcon } from "../../constants/icons";
import { userData } from '../../App';

const DashboardBox = ({ id, name, ticketsArray }) => {
  const { userObj, displayGroup } = useContext(userData);
  return (

    <div className="dashboard-box-container">
      <div className="dashboard-box-category">
        <div className="dashboard-box-category-txt">
          {(displayGroup !== "userId") ?
            icons[name]
            :
            <div className="dashboardbox-img-container">
              {getImage(name)}
              {getStatusIcon(userObj[id].available)}
            </div>
          }
          {name}
          <span style={{ color: "grey" }}>{` ${ticketsArray.length}`}</span>
        </div>
        <div className="dashboard-box-category-txt">
          {icons["Plus"]}
          {icons["Dots"]}
        </div>
      </div>
      <div className="dashboard-box-card-container">
        {ticketsArray.map((cardObj) =>
          <Card key={cardObj.id} ticketDetails={cardObj} />
        )}
      </div>
    </div>

  );
}

export default DashboardBox;