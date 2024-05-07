import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onOpen={() => {
          setShowForm(!showForm);
        }}
      />
      {showForm && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
