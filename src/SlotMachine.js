import React from "react";
import Game from "./Game";
import "./Game.css";

export default function SlotMachine() {
  return (
    <div className="slotmachine-container">
      <div className="text-container">
        <h1 id="gameH1"> Click "Spin" to start</h1>
        <p id="gameDesc">
          Match three dice and win 5 extra rows with your next Lucky 7 lottery
          purchase!
        </p>
      </div>
      <Game />
    </div>
  );
}
