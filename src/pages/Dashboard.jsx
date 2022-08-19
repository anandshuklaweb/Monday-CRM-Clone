import React, { useState, useEffect, useContext } from "react";
import TicketCard from "../components/TicketCard";
import axios from "axios";
import CategoriesContext from "../context";

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);
  const { categories, setCategories } = useContext(CategoriesContext);
  useEffect(async () => {
    const response = await axios.get("http://localhost:8000/tickets");
    const dataObject = response.data.data;

    const arrayOfKeys = Object.keys(dataObject);
    const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);
    const formattedArray = [];
    arrayOfKeys.forEach((key, index) => {
      const formattedData = { ...arrayOfData[index] };
      formattedData["documentId"] = key;
      formattedArray.push(formattedData);
    });

    setTickets(formattedArray);
  }, []);

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))]);
  }, [tickets]);

  const colors = [
    "rgb(253 120 132)",
    "rgb(245 187 120)",
    "rgb(255 224 70)",
    "rgb(135 229 156)",
    "rgb(186,225,255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    key={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
