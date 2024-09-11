import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="sticky bg-purple-600 text-white p-5 flex justify-between">
        Portal filmes
        <nav>
          <ul className="flex gap-3">
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
