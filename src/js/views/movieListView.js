import { createMovieCard } from "../helpers";
export default class MovieList {
  #parentElement = document.getElementById("page-list");
  #path = window.localStorage.getItem("urlParam");
  #genreName = window.localStorage.getItem("pathName");

  constructor(fetchFunction) {
    if (!this.#parentElement) return;
    this.#parentElement.innerHTML = "";
    
    this._init(fetchFunction);
  }

  async _init(getMovieList) {
    let currentPage = 1;
    let totalPages = 0;

    const path = this.#path;
    const getMovies = await getMovieList(path, currentPage);

    const { results: movies, total_pages } = getMovies;
    totalPages = total_pages;
    document.title = `${this.#genreName}`;

    const movieListEl = document.createElement("section");
    movieListEl.classList.add("movie-list", "genre-list");
    movieListEl.ariaLabel = `${this.#genreName} movies`;
    movieListEl.innerHTML = `
    <div class="title-wrapper">
      <h1 class="heading">All ${this.#genreName} Movies</h1>  
    </div>
    
    <div class="grid-list">
    </div>
    
    <button class="btn load-more" load-more>
      Load More  
    </button>
    `;
    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      movieListEl.querySelector(".grid-list").append(movieCard);
    });
    this.#parentElement.insertAdjacentElement("afterbegin", movieListEl);


    const loadMore = movieListEl.querySelector("[load-more]");
    loadMore.addEventListener("click", async function () {
      if (currentPage >= totalPages) {
        this.style.display = "none"; // this == load more button 👾
        return;
      }
      currentPage++;
      this.classList.add("loading"); 

      const AdditionalMovies = await getMovieList(path, currentPage);
      const { results: movieList } = AdditionalMovies;
      if (movieList) this.classList.remove("loading"); 
      movieList.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        movieListEl.querySelector(".grid-list").append(movieCard);
      });
    });
  }
}
