import React, { useEffect, useState } from "react";
import { fetchCodeforcesContests } from "./api";
import "./App.css";

function App() {
  const [codeforcesContests, setCodeforcesContests] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // State for Dark Mode

  useEffect(() => {
    const getContests = async () => {
      const codeforces = await fetchCodeforcesContests();
      const filteredCodeforces = codeforces.filter(
        (contest) => contest.phase === "BEFORE"
      );
      setCodeforcesContests(filteredCodeforces);
    };

    getContests();
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Add or remove dark mode class
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <button className="toggle-button" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>Upcoming Codeforces Contests</h1>
      <ul>
        {codeforcesContests.map((contest, index) => (
          <li key={index}>
            <h3>
              {contest.id} - {contest.name}
            </h3>
            <p>
              Start Time:{" "}
              {new Date(contest.startTimeSeconds * 1000).toLocaleTimeString()}
            </p>
            <p>
              Start Date:{" "}
              {new Date(contest.startTimeSeconds * 1000).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
