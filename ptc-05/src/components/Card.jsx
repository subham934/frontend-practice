import React from "react";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="content">
        <img src={props.people.url} alt={props.people.name} />
      <div className="texts">
        <h2>{props.people.name}</h2>
      <p>{props.people.age}</p>
      <button>{props.status}</button>
      </div>
      </div>
    </div>
  );
};

export default Card;
