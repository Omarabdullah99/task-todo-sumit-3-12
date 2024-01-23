import Task from "./Task";

// eslint-disable-next-line react/prop-types
export default function TaskList({ storeTask, onDelete, onChangeTask}) {
  console.log("tasklist", storeTask);
  return (
    <div>
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          storeTask.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onChangeTask={onChangeTask}
            />
          ))
        }
      </ul>
    </div>
  );
}
