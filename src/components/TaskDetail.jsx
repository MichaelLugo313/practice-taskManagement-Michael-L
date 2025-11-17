import { useParams, Link } from "react-router";
import { tasks } from "../tasks";

export default function TaskDetail() {
  const { taskId } = useParams(); // Gets the :taskId from URL
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <div className="not-found">
        <h2>Task Not Found</h2>
        <p>Sorry, no task exists with ID: <strong>{taskId}</strong></p>
        <Link to="/tasks">← Back to Task List</Link>
      </div>
    );
  }

  return (
    <div className="task-detail">
      <h1>{task.title}</h1>
      <p><strong>ID:</strong> {task.id}</p>
      <div className="description">
        <h3>Description</h3>
        <p>{task.description}</p>
      </div>
      <Link to="/tasks">← All Tasks</Link>
    </div>
  );
}