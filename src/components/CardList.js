import React from "react";
import Card from "./Card";
import "./CardList.css";

function CardList({ list }) {
  if (!list) {
    return (
      <h2 id="loading" className="text-3xl text-center mt-10">
        Loading
      </h2>
    );
  } else {
    return (
      <div className="md:flex md:flex-wrap">
        {list.map((people) => (
          <Card
            key={people.name}
            name={people.name}
            gender={people.gender}
            height={people.gender}
            mass={people.mass}
            birth_year={people.birth_year}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
