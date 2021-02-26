import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

function TaskList() {
  // State stuff
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // UseEffect
  // run once
  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTasks();
  }, [tasks, status]);
  // Function

  // Filter Tasks
  const filterHandler = () => {
    switch (status) {
      case "done":
        setFilteredTasks(tasks.filter((task) => task.isComplete === true));
        break;

      case "uncomplete":
        setFilteredTasks(tasks.filter((task) => task.isComplete === false));
        break;

      default:
        setFilteredTasks(tasks);
        break;
    }
  };
  // LocalStorage
  const saveLocalTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") == null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let localTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTasks);
    }
  };

  // Add Task
  const addTask = (task) => {
    if (!task.text || /^\d+$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    console.log(task, ...tasks);
  };

  // Done Task
  const completeTask = (id) => {
    let updatedTask = tasks.map((task) => {
      if (task.id === id) {
        // task.isComplete = !task.isComplete;
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  // Remove Task
  const removeTask = (id) => {
    const newTasksArray = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasksArray);
  };

  // Search Task
  const searchTask = (e) => {
    const value = e.target.value;
    const tasksAfterSearch = [...tasks].filter((task) => {
      return task.content.toLowerCase().includes(value);
    });
    console.log(value);
    setTasks(tasksAfterSearch);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="task_list">
      <TaskForm onSubmit={addTask} />
      <div className="task-list__form">
        <div className="controllTask">
          {/* <div className="searchTask">
            <input
              className="search_input"
              placeholder="Search"
              required=""
              type="text"
            />
            <button className="btn_search" type="button">
              Search
            </button>
          </div> */}
        </div>
        <Tasks
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
          statusHandler={statusHandler}
          filteredTasks={filteredTasks}
        />
      </div>
    </div>
  );
}

export default TaskList;
