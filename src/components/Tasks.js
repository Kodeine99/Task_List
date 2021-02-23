import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "../assets/css/TaskItem.css";

function Tasks({
  tasks,
  completeTask,
  removeTask,
  statusHandler,
  filteredTasks,
}) {
  console.log(filteredTasks);
  return (
    <div>
      <div className="taskList">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  className="quickSearch_input"
                  placeholder="Search"
                  required=""
                  type="text"
                />
              </td>
              <td>
                <div className="sortTask">
                  <label className="custom-select" htmlFor="styledSelect1">
                    <select
                      onChange={statusHandler}
                      id="styledSelect1"
                      name="options"
                    >
                      <option value="all">All</option>
                      <option value="uncomplete">InComplete</option>
                      <option value="done">Done</option>
                    </select>
                  </label>
                </div>
              </td>
              <td></td>
            </tr>
            {filteredTasks.map((task, index) => (
              <tr key={index}>
                <td
                  className={`task-item ${task.isComplete ? "completed" : ""}`}
                >
                  {index + 1}
                </td>
                <td
                  className={`task-item ${task.isComplete ? "completed" : ""}`}
                >
                  {task.text}
                </td>
                <td>{`${!task.isComplete ? "InComplete" : "Completed"}`}</td>
                <td className="btnControll">
                  <button
                    className="actionBtn Btn_Done"
                    onClick={() => completeTask(task.id)}
                  >
                    {`${!task.isComplete ? "Done" : "Unfinished"}`}
                  </button>
                  <button
                    className="actionBtn Btn_Del"
                    onClick={() => removeTask(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
