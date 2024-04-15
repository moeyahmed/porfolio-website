import React from "react";

const WorkItems = ({ item }) => {
  const getLink = (id) => {
    switch (id) {
      case 1:
        return "https://github.com/moeyahmed/Fintrack";
      case 2:
        return "https://github.com/moeyahmed/mental-math-website";
      case 3:
        return "https://github.com/moeyahmed/Expence_tracker_react";
      default:
        return "#"; // default fallback, can be adjusted as needed
    }
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      {/* Conditionally render link for items with id 1, 2, and 3 */}
      {(item.id === 1 || item.id === 2 || item.id === 3) && (
        <a href={getLink(item.id)} className="work__button">
          Demo
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}
    </div>
  );
};

export default WorkItems;
