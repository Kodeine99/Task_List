import React, { useState } from "react";
import "../assets/css/taskForm.css";
function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });

    setInput("");
  };
  return (
    <div className="container task-form">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          placeholder="Add new task"
          required=""
          type="text"
          value={input}
          name="text"
          onChange={handleChange}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default TaskForm;
