const Task = ({ task, onClick, reminder }) => {
  return (
    <div
      className={`event ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => reminder(task.id)}
    >
      <h3>
        {task.text} <i class="bx bx-x" onClick={() => onClick(task.id)}></i>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
