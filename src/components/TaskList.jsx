import { Link } from "react-router";
import { tasks } from "../tasks";

export default function TaskList() {
  return (
    <div className="task-list">
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`} className="task-link">
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}