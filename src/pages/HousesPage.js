import React from "react";
import Filter from "../images/Filter.png";
import Card from "../images/Card.png";
import { Link } from "react-router-dom";

const Houses = () => {
  return (
    <main className="my-10 flex justify-evenly">
      <section>
        <img src={Filter} alt="Filter" />
      </section>
      <section>
        <Link to="/house">
          <img className="cursor-pointer" src={Card} alt="Card" />
        </Link>
      </section>
    </main>
  );
};

export default Houses;
