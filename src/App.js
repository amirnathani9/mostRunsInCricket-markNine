import { useState } from "react";
import "./styles.css";

const mostRuns = {
  T20: [
    { name: "Virat Kohli", matches: "90", runs: "3159" },
    { name: "M.Guptil", matches: "102", runs: "2939" },
    { name: "R.Sharma", matches: "111", runs: "2864" }
  ],

  ODI: [
    { name: "Sachin Tendulkar", matches: "463", runs: "18426" },
    { name: "K.Sangakara", matches: "404", runs: "14234" },
    { name: "R.Pointin", matches: "375", runs: "13704" }
  ],

  Test: [
    { name: "Sachin Tendulkar", matches: "200", runs: "15921" },
    { name: "R.Pointing", matches: "168", runs: "13378" },
    { name: "J.Kallis", matches: "166", runs: "13289" }
  ]
};

var mostRunsList = Object.keys(mostRuns);

export default function App() {
  const [runsList, setRunsList] = useState("T20");
  function formatClickHandler(form) {
    setRunsList(form);
  }

  return (
    <div className="App">
      <h1>🏏Most Runs In Cricket Format</h1>
      <p>
        Checkout most runs scored by the player in cricket in different forms.
      </p>
      <div>
        {mostRunsList.map((form) => {
          return (
            <button onClick={() => formatClickHandler(form)} key={form}>
              {form}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {mostRuns[runsList].map((run) => (
          <li key={run.name}>
            <div style={{ fontSize: "1.5rem", color: "#c9c5de" }}>
              {run.name}
            </div>
            <div style={{ fontSize: "1.1rem" }}> Matches: {run.matches} </div>
            <div style={{ fontSize: "1.1rem" }}>Runs: {run.runs} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
