import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <CardContainer title={"Filmes antigos"}>
        {movies
          .filter((m) => m.ano_lancamento < 2000)
          .map((m, i) => (
            <MovieCard {...m} key={i} />
          ))}
      </CardContainer>

      <CardContainer title={"Mais avaliados"}>
        {movies
          .filter((m) => m.avaliacao > 8.5)
          .map((m, i) => (
            <MovieCard {...m} key={i} />
          ))}
      </CardContainer>
    </div>
  );
}
