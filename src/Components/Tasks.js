import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onClick={onDelete}
          reminder={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
