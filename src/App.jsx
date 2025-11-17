import { BrowserRouter, Routes, Route, Link } from "react-router";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>My Task Manager</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="home">
                  <h2>Welcome!</h2>
                  <p>Go to <Link to="/tasks">Tasks</Link> to explore.</p>
                </div>
              }
            />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/task/:taskId" element={<TaskDetail />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}