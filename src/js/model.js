import { getServerData } from "./helpers";
import { API_KEY } from "./config";
import {
  POPULAR_MOVIES_PATH,
  UPCOMING_MOVIES_PATH,
  TRENDING_MOVIES_PATH,
  TOP_RATED_MOVIES_PATH,
  GENRE_LIST_PATH,
} from "./config";

// STATE
export const movieDB = {
  genres: {},
  popularMovies: [],
  homePageSections: [
    {
      title: "Upcoming Movies",
      path: UPCOMING_MOVIES_PATH,
    },
    {
      title: "Weekly Trending Movies",
      path: TRENDING_MOVIES_PATH,
    },
    {
      title: "Top Rated Movies",
      path: TOP_RATED_MOVIES_PATH,
    },
  ],
};

// MOVIES DATA
/**
 * Fetches popular movies data from the server and stores in movieDB.popularMovies array.
 *
 * @async
 * @returns {Promise} Promise that resolves when popular movies data is fetched
 * @throws {Error} If there is an error fetching popular movies data
 */
export const getPopularMovies = async function () {
  try {
    await getServerData(POPULAR_MOVIES_PATH, ({ results }) => {
      results.forEach((movie) => movieDB.popularMovies.push(movie));
    });
  } catch (error) {
    console.error(error.message);
    throw new Error(`Error fetching popular movies: ${error.message}`);
  }
};

/**
 * Fetches the movie lists for each section on the home page.
 * Gets the path for each home page section from movieDB.homePageSections,
 * fetches the data from that path, and stores the results in the section's
 * movieList property.
 */
export const getHomePageMovieLists = async function () {
  try {
    const fetchPromises = movieDB.homePageSections.map(
      async ({ path }, index) => {
        await getServerData(path, ({ results }) => {
          movieDB.homePageSections[index].movieList = results;
        });
      }
    );
    await Promise.all(fetchPromises);
  } catch (error) {
    console.error(error.message);
    throw new Error(`Error fetching home page movie lists: ${error.message}`);
  }
};

// Genres
/**
 * Fetches the list of movie genres from the server and stores them in movieDB.genres,
 * mapping the genre ID to the genre name.
 *
 * @async
 * @returns {Promise} Promise that resolves when genre list is fetched
 * @throws {Error} If there is an error fetching the genre list
 */
export const getGenreList = async function () {
  try {
    await getServerData(GENRE_LIST_PATH, ({ genres }) => {
      genres.forEach(({ id, name }) => {
        movieDB.genres[id] = name;
      });
    });
  } catch (error) {
    console.error(error.message);
    throw new Error(`Error fetching genre lists: ${error.message}`);
  }
};

export const getMovieListByCategory = async function (path, page) {
  try {
    const fetchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&page=${page}&${path}`;
    const res = await fetch(fetchUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error fetching data on getting genre list ${error.message}`
    );
  }
};

export const getMovieListBySearching = async function (path) {
  try {
    const fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${path}&page=1&include_adult=false`;
    const res = await fetch(fetchUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching data on searching movie ${error.message}`);
  }
};

export const getMovieById = async function (movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=casts,videos,images,releases`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching the movie by getting id`);
  }
};

export const getSugestedMovies = async function (movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&page=1`;
    const res = await fetch(url);
    const data = await res.json();
    const { results } = data;
    return results;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching the suggested movies ${error.message}`);
  }
};
