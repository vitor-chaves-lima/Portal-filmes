import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";

export default function Home() {
  return (
    <CardContainer title={"Filmes antigos"}>
      {movies
        .filter((m) => m.ano_lancamento < 2000)
        .map((m, i) => (
          <MovieCard {...m} key={i} />
        ))}
    </CardContainer>
  );
}
