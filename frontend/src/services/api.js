export const getPopularMovies = async () => {
  const API_KEY = "bee1e49e108be6f3ed2811fac7244cb0";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Change size if needed

  
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const API_KEY = "bee1e49e108be6f3ed2811fac7244cb0";
  const BASE_URL = "https://api.themoviedb.org/3";
  
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
