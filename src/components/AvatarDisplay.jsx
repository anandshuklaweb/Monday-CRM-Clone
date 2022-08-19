import React from "react";
import blankAvatar from "../images/blankAvatar.png";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={"photot of" + ticket.owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
