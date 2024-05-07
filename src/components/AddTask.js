import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a Task.");
      return;
    }

    onAdd({ text, day });

    setText("");
    setDay("");
  };
  return (
    <form className="addtask" onSubmit={onSubmit}>
      <label>Task Name</label>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label>Task Date</label>
      <input
        type="text"
        placeholder="Add date"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />

      <input type="submit" value="Save Task" className="save_btn" />
    </form>
  );
};

export default AddTask;
