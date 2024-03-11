import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import useAxiosCards from "./hooks/useAxiosCards";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";


function CardTable() {
  const [cards, addCard] = useAxiosCards();

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
