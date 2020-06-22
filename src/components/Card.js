import React from "react";
import "../output.css";
import "./SearchBar.css";
import "./Card.css";

function Card({ name, gender, height, mass, birth_year }) {
  return (
    <div className="shadow-outline font-mono m-4 md:w-64 h-auto p-4" id="card">
      <h1 className="">
        Name: <span className="font-extrabold">{name}</span>
      </h1>
      <p class="uppercase">Gender: {gender}</p>
      <p>Height: {height}cm</p>
      <p>Weight: {mass}kg</p>
      <p>Birth year: {birth_year}</p>
    </div>
  );
}

export default Card;
