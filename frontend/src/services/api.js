const API_KEY = "bee1e49e108be6f3ed2811fac7244cb0";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Change size if needed

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error("API request failed");
    return response.json();
  } catch (err) {
    console.error("fetchMovieDetails error:", err);
    return null;
  }
};

export const fetchMovieTrailer = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("fetchMovieTrailer error:", err);
    return null;
  }
};
