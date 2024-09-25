import {useState} from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard.jsx";

export default function MovieListPage(){
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    const filteredMovies = movies
        .filter((movie) => movie["titulo"].toLowerCase().includes(search))
        .map(movie => <MovieCard key={movie.id} {...movie} />)

    return(
        <>
            <h1>Veja o catálogo completo de filmes</h1>
            <input type="text" name="search" id="search" placeholder="Buscar"  className="border-black border" value={search} onChange={handleSearch}/>

            {
                filteredMovies.length > 0 ? filteredMovies : <p>Não existem filmes</p>
            }
        </>
    )
}