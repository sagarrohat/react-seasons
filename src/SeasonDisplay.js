import "./SeasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 8) {
    return lat > 0 ? "summer" : "winter";
  }
  return lat > 0 ? "winter" : "summer";
};

const SeasonConfig = {
  summer: {
    content: "Lets hit the beach!",
    iconName: "fa-sun-o",
  },
  winter: {
    content: "Burr, it is chilly",
    iconName: "fa-snowflake-o",
  },
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { content, iconName } = SeasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <li className={`icon-left fa ${iconName} fa-4x`}></li>
      <h1>{content}</h1>
      <li className={`icon-right fa ${iconName} fa-4x`}></li>
    </div>
  );
};

export default SeasonDisplay;
