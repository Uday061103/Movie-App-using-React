import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  // Fetch movie details using the ID (from your API/context)
  return <div>Details for Movie {id}</div>;
}

export default MovieDetails;