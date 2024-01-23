import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddTask({ handleAddTask }) {
  const [addTask, setAddTask] = useState("");
  return (
    <div className="my-3">
      <input
        type="text"
        placeholder="Add Task"
        className="p-2 rounded border-2 border-black"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => {
          
          handleAddTask(addTask);
          setAddTask("");
      }}
      >
        Add Task
      </button>
    </div>
  );
}
