import React, { useState } from "react";
import "./assets/css/App.css";
import "./assets/css/base.css";
import Header from "./components/header";
import TaskControll from "./components/TaskControll";

const App = () => (
  <div className="App">
    <div className="container">
      {" "}
      <Header />
      <TaskControll />
    </div>
  </div>
);

export default App;
