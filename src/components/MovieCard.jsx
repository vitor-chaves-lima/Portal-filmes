import { Link } from "react-router-dom";

export default function MovieCard({ titulo, imagem_destaque, id }) {
  return (
    <>
      <div className="flex flex-col justify-center text-center gap-4">
        <h2>{titulo}</h2>
        <div className="flex justify-center">
          <img src={imagem_destaque} className="w-28 h-36" />
        </div>
        <Link to={`/movies/${id}/details`}>Saiba mais</Link>
      </div>
    </>
  );
}
