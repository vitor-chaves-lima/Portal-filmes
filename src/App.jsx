import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Link({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "border-b-2" : "")}
    >
      {children}
    </NavLink>
  );
}

function App() {
  return (
    <>
      <header className="sticky bg-purple-800 text-white p-5 flex justify-between">
        <h1 className="font-bold">Portal filmes</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Filmes</Link>
            </li>
            <li>
              <Link to="/genres">Gêneros</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
