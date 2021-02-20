import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    if (!task.text || /^\d+$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    console.log(task, ...tasks);
  };
  return (
    <div className="task_list">
      <TaskForm onSubmit={addTask} />
      <div className="task-list__form">
        <div className="controllTask">
          <div className="searchTask">
            <input
              className="search_input"
              placeholder="Search"
              required=""
              type="text"
            />
            <button className="btn_search" type="button">
              Search
            </button>
          </div>
          <div className="sortTask">
            <label className="custom-select" htmlFor="styledSelect1">
              <select id="styledSelect1" name="options">
                <option value="">Sort By</option>
                <option value="1">A-Z</option>
                <option value="2">Z-A</option>
                <option value="3">InComplete</option>
                <option value="4">Done</option>
              </select>
            </label>
          </div>
        </div>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default TaskList;
