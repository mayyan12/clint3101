import React, { useState, useEffect } from "react";
import axios from "axios";
import { VscAdd } from "react-icons/vsc";
import { FaTrashCan } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { HiOutlineEmojiSad } from "react-icons/hi";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:2600/");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleDoneAll = () => {};

  const handleNotDoneAll = () => {};

  return (
    <div className="form-container">
      <h1>Your Tasks</h1>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.details}</li>
        ))}
      </ul>

      <div className="buttons-container">
        <button className="delete-all-btn" onClick={handleDeleteAll}>
          <FaTrashCan className="icon-trash" />
          delete all
        </button>
        <button className="done-all-btn" onClick={handleDoneAll}>
          <IoCheckmarkDone />
          done all
        </button>
        <button className="not-done-all-btn" onClick={handleNotDoneAll}>
          <HiOutlineEmojiSad />
          didn't do all
        </button>
      </div>

      <form>
        <input type="text" name="task" placeholder="add new task" />
        <input type="date" name="date" />
        <button>
          <VscAdd className="icon-add" />
          add
        </button>
      </form>
    </div>
  );
}

export default App;
