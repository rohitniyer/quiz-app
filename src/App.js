import React from "react";

import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
