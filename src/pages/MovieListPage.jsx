import {useState} from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard.jsx";

export default function MovieListPage(){
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    return(
        <>
            <h1>Veja o catálogo completo de filmes</h1>
            <input type="text" name="search" id="search" placeholder="Buscar"  className="border-black border" value={search} onChange={handleSearch}/>

            {
                movies
                    .filter((movie) => movie["titulo"].toLowerCase().includes(search))
                    .map(movie => <MovieCard key={movie.id} {...movie} />)
            }
        </>
    )
}