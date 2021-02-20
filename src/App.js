import React, { useState } from "react";
import "./assets/css/App.css";
import "./assets/css/base.css";
import Header from "./components/header";
import TaskList from "./components/TaskList";

const App = () => (
  <div className="App">
    <div className="container">
      {" "}
      <Header />
      <TaskList />
    </div>
  </div>
);

export default App;
