import React from "react";
import "./App.css";
import Search from "./components/search";

function App() {
  return (
    <div className="container">
      <h1>Weather Finder</h1>
      <hr />
      <Search />
    </div>
  );
}

export default App;
