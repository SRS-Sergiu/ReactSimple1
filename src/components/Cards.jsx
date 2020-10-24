import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination!</h1>
      <div className="cards__container">
        <div className="cards__wapper">
          <ul className="cards__items">
            <CardItem
              src="images/img1.jpg"
              text="The best car in the world. "
              label="Tiguan - 15.500$"
              path="/services"
            />
            <CardItem
              src="images/img2.jpeg"
              text="To ignore, add // eslint-disable-next-line to the line before. "
              label="Audi a6 - 9.500$"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img3.jpeg"
              text="The best car in the world. "
              label="BMW x3 - 12.500$"
              path="/services"
            />
            <CardItem
              src="images/img4.jpeg"
              text="To ignore, add // eslint-disable-next-line to the line before. "
              label="Audi a4 - 8.500$"
              path="/services"
            />
            <CardItem
              src="images/img5.jpeg"
              text="Search for the keywords to learn more about each warning."
              label="Bmw 520 - 4.500$"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
