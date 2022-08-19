import React from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineFileAdd } from "react-icons/ai";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="controls-container">
        <div className="icon tooltip" onClick={() => navigate("/")}>
          <AiOutlineDashboard />
          <span className="tooltiptext">Dashboard</span>
        </div>
        <div className="icon tooltip" onClick={() => navigate("/ticket")}>
          <AiOutlineFileAdd />
          <span className="tooltiptext">Create Ticket</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
