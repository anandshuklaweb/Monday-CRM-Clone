import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = () => {
    let color;
    switch (status) {
      case "done":
        color = "rgb(119 255 148)";
        break;

      case "working on it":
        color = "rgb(245, 187, 120)";
        break;

      case "stuck":
        color = "rgb(253, 120, 132)";
        break;

      default:
        color = "rgb(117 255 255)";
        break;
    }
    return color;
  };

  return (
    <div
      className="status-display"
      style={{ backgroundColor: getColor(status) }}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
