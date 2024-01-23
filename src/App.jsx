import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/addTask";
import { initialTasks } from "./data/taskData";

export default function App() {
  const [storeTask, setStoreTask] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, currnet) =>
      prev && prev.id > currnet.id ? prev.id : currnet.id
    );
    // console.log('maxid',maxId)
    return maxId + 1;
  };

  //ALl handle Here
  const handleAddTask = (addTask) => {
    setStoreTask([
      ...storeTask,
      {
        id: getNextId(storeTask),
        text: addTask,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTask = storeTask.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setStoreTask(nextTask);
  };

  const handleDeleteTask = (id) => {
    setStoreTask(storeTask.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Todo List with State</h1>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList
        storeTask={storeTask}
        onDelete={handleDeleteTask}
        onChangeTask={handleChangeTask}
      />
    </div>
  );
}
