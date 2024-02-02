import { createMovieCard } from "../helpers";
export default class HomePages {
  #moviesDb;
  #parentElement = document.getElementById('page-home')

  constructor(data) {
    this.#moviesDb = data;
    this._init();
  }

  _init() {
    if(!this.#parentElement) return;
    for (const { title, movieList } of this.#moviesDb.homePageSections) {
      this._createNewPage(title, movieList);
    }
  }

  _createNewPage(title, movies) {
    const newPage = document.createElement("section");
    newPage.classList.add("movie-list");
    newPage.ariaLabel = `${title}`;
    newPage.innerHTML = `
      <div class="title-wrapper">
        <h3 class="title-large">${title}</h3>
      </div>
      <div class="slider-list">
        <div class="slider-inner"></div>
      </div>
    `;
    for (const movie of movies) {
        const movieCard = createMovieCard(movie); //created from movie_card.js
        newPage.querySelector(".slider-inner").appendChild(movieCard);
        // console.log(movieCard)
      }
    this.#parentElement.insertAdjacentElement("beforeend", newPage);
  }
}
