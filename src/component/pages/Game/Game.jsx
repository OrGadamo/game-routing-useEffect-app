import "./Game.css";
import { useState, useEffect } from "react";

function Game() {
  const [level, setLevel] = useState(0);
  const [gameTime, setGameTime] = useState({});
  useEffect(() => {
    alert("Welcome");
  }, []);
  useEffect(() => {
    console.log("level have been updated");
  }, [level]);
  useEffect(() => {
    setGameTime(new Date());
  }, []);
  useEffect(() => {
    alert("Its Game Time!");
  }, [gameTime]);
  return (
    <div className="game">
      <h1>{level}</h1>
      <button onClick={() => setLevel(level + 1)}>click to level up</button>
      <h2>Time:{gameTime.toString()}</h2>
      <button onClick={() => setGameTime(new Date())}>Update Time</button>
    </div>
  );
}

export default Game;
