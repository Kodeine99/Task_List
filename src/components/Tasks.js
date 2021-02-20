import React from "react";
import TaskForm from "./TaskForm";

function Tasks({ tasks }) {
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
                    <select id="styledSelect1" name="options">
                      <option value="">All</option>
                      <option value="3">InComplete</option>
                      <option value="4">Done</option>
                    </select>
                  </label>
                </div>
              </td>
              <td></td>
            </tr>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.id}</td>
                <td>{task.text}</td>
                <td>{task.status}</td>
                <td className="btnControll">
                  <button className="actionBtn Btn_Done">Done</button>
                  <button className="actionBtn Btn_Del">Delete</button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>1</td>
              <td>Learning ReactJs</td>
              <td>InComplete</td>
              <td className="btnControll">
                <button className="actionBtn">Edit</button>
                <button className="actionBtn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Reading</td>
              <td>Done</td>
              <td className="btnControll">
                <button className="actionBtn">Edit</button>
                <button className="actionBtn">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
