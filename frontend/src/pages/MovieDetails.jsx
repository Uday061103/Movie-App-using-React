// MovieDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieTrailer } from '../services/api';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const details = await fetchMovieDetails(id);
        const videos = await fetchMovieTrailer(id);

        if (!details || !videos) {
          throw new Error("No data from API");
        }

        setMovie(details);
        const trailer = videos.find((video) => video.type === 'Trailer');
        setTrailerKey(trailer?.key);
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to fetch movie details.");
        setLoading(false);
      }
    };

    getMovieData();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="movie-details">
        <Link to="/" className="go-back-btn">
        &larr; Go Back to Search
      </Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {trailerKey ? (
        <YouTube videoId={trailerKey} />
      ) : (
        <p>No trailer available.</p>
      )}
    </div>
  );
}

export default MovieDetails;