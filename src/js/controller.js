"use strict";
import base from "./views/baseView.js";
import Banner from "./views/bannerView.js";
import HomePages from "./views/homePagesView.js";
import Sidebar from "./views/sidebar.js";
import MovieList from "./views/movieListView.js";
import { getMovieListByCategory } from "./model.js";
import Search from "./views/searchView.js";
import DetailPage from "./views/detailPageView.js";

import {
  movieDB,
  getGenreList,
  getPopularMovies,
  getHomePageMovieLists,
  getMovieListBySearching,
  getMovieById,
  getSugestedMovies
} from "./model.js";


// const html = document.querySelector("html");
// html.innerHTML = "";

async function init() {
  try {
    await getPopularMovies();
    await getHomePageMovieLists();
    await getGenreList();

    // Sidebar
    const sidebar = new Sidebar(movieDB);
    const search = new Search(getMovieListBySearching);


    // Home
    const banner = new Banner(movieDB);
    const homePages = new HomePages(movieDB);

    // List
    const movieList = new MovieList(getMovieListByCategory);

    // Detail
    const movieDetail = new DetailPage(getMovieById, getSugestedMovies);

  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Call the init function or perform other actions
init();