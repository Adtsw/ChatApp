import React from "react";

//import closeIcon from "../../Icons/closeIcon";

import "./InfoBar.css";

import onlineIcon from "../../Icons/onlineIcon.png";

function Infobar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img
          className="onlineIcon"
          src={onlineIcon}
          width="2px"
          height="2px"
          alt="online"
        />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img
            className="close"
            src="https://www.pngfind.com/pngs/m/193-1931093_cross-icon-png-black-cross-png-transparent-png.png"
            width="15px"
            height="15px"
            alt="close"
          />
        </a>
      </div>
    </div>
  );
}

export default Infobar;
