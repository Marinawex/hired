import React from "react";
import CardWraper from "./CardWraper";

const statusCards = () => {
  const titles = [
    "inProcess",
    "applied",
    "followUp",
    "rejected",
    "noReply",
    "All Companies",
  ];
  return (
    <div className="container">
      {titles.map((title, index) => (
        <CardWraper title={title} key={index} />
      ))}
    </div>
  );
};

export default statusCards;
