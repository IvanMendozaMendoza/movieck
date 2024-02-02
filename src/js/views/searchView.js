import { createMovieCard } from "../helpers";

export default class Search {
  #parentElement = document.querySelector(".container");
  #searchWrapper = document.querySelector(".search-wrapper");
  #searchField = document.querySelector(".input-field");
  #header = document.querySelector('.header');
  constructor(fetchFunc) {
    this._init(fetchFunc);
  }

  _init(getMoviesBySearch) {
    const wrapper = this.#searchWrapper;
    const field = this.#searchField;
    const header = this.#header;

    const searchResultsModal = document.createElement("div");
    searchResultsModal.classList.add("search-modal");
    this.#parentElement.appendChild(searchResultsModal);
    
    let searchTimeout;

    this.#searchField.addEventListener("input", function () {
      if (!field.value.trim()) {
        searchResultsModal.classList.remove("active");
        wrapper.classList.remove("searching");
        header.classList.remove('searching');
        clearTimeout(searchTimeout);
        return;
      }

      wrapper.classList.add("searching");
      clearTimeout(searchTimeout);

      searchTimeout = setTimeout(async function () {
        const getMovies = await getMoviesBySearch(field.value);
        const { results: movieList } = getMovies;
        wrapper.classList.remove("searching");
        header.classList.add('searching')

        searchResultsModal.classList.add("active");
        searchResultsModal.innerHTML = ``; //clear before

        searchResultsModal.innerHTML = ` 
        <p class="label">Results for</p>
        <h1 class="heading">${field.value}</h1>

        <div class="movie-list">
          <div class="grid-list"></div>
        </div>
       `; // add new results

        movieList.forEach((movie) => {
          const movieCard = createMovieCard(movie);
          searchResultsModal.querySelector(".grid-list").appendChild(movieCard);
        });
      }, 500);
    });
  }
}
