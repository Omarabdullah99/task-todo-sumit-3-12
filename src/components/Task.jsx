import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Task({ task, onDelete,onChangeTask }) {
  // console.log("task", task);
  const [isEditing, setIsEditing] = useState(false);


  let taskContent;

  if (isEditing) {
    taskContent = (
      <div>
      <input
      value={task.text}
      onChange={(e) => {
          onChangeTask({
              ...task,
              text: e.target.value,
          });
      }}
  />

        <button
          className="bg-green-500 text-white px-4 py-2"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </div>
    );
  } else {
    taskContent = (
      <div>
        {task.text}
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
    );
  }
  return (
    <li>
      <label className="flex my-3">
        <input type="checkbox" />
        {taskContent}
        <button
          className="bg-red-500 text-white px-4 py-2"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </label>
    </li>
  );
}
