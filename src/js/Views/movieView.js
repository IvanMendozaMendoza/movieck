export default class MovieView {
  _parentElement = document.getElementById("movies-container");
  _data;

  constructor(data) {
    this._data = data;
  }

  update(data) {
    this._data = data;
    this.render();
  }

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _selectIconByRating(rating) {
    if (rating >= 9) {
      return `
          <svg class="bigStar" xmlns="http://www.w3.org/2000/svg" fill="transparent" height="30" viewBox="0 -960 960 960" width="30" >
            <path d="m668-340 152-130 120 10-176 153 52 227-102-62-46-198Zm-94-292-42-98 46-110 92 217-96-9ZM294-247l126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM173-80l65-281L20-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L173-80Zm247-340Z" />
          </svg>
            `;
    } else if (rating < 9 && rating >= 7) {
      return `
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z" fill="#ffcc00"/>
          </svg>
            `;
    } else if (rating < 7 && rating >= 5) {
      return `
          <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
            <path d="m480-323 126 77-33-144 111-96-146-13-58-136v312ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" fill="#ffcc00"/>
          </svg>
        `;
    } else if (rating < 5) {
      return `
          <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
            <path d="m480-323 126 77-33-144 111-96-146-13-58-136v312ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" fill="#cf2929"/>
          </svg>
        `;
    }
  }

  _generateMarkup() {
    return `
        <div class="col-md-3">
            <div class="card shadow--${(this._data.rating >= 9) ? "high" : "normal"}">
                <img
                    src="${this._data.img}"
                    class="card-img-top"
                    alt="${this._data.title}"
                />
                <figure class="rating">
                    <div>
                        ${this._data.rating}/10
                    ${this._selectIconByRating(this._data.rating)}
                    </div>
                </figure>
                <figure class="add-favorite">
                <svg class="bookmark" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" fill="#353c48"/>
              </svg>
                </figure>
                <div class="movie-data">
                    <p class="title">${this._data.title}</p>
                    <figure class="classification"><p>${
                      this._data.classification
                    }</p></figure>
                    <p class="category">${this._data.genres.join(", ")}</p>
                    <p class="date">Out on: ${this._data.releaseDate}</p>
                    <div class="trailer">
                        <p class="trailer-description">watch trailer</p>
                        <svg class="play--enabled" xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50">
                  <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill="#fff"/>
                </svg>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

/* The code is creating an instance of the `MovieView` class and passing in an object `movieData` as
the argument. This object contains information about a movie, such as its image, title, rating,
classification, genres, and release date. 
// Example usage:
const movieData = {
  img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
  title: "Aquaman and the Lost Kingdom",
  rating: "9.56",
  classification: "PG-13",
  genres: ["Action", "Adventure", "Fantasy"],
  releaseDate: "12/22/2023",
};

const movie = new MovieView(movieData);
movie.render();
*/

/*class Movie {
    _parentElement = document.getElementById('movies-container');
    _data;

    update(data){
        this._data = data;
    }
    _generateMarkup() {
        const html = `
        <div class="col-md-3">
        <div class="card">
          <img
          src="${this._data.img}"
          class="card-img-top"
          alt="great movie to watch and the best of movies on the world"
          />
          <figure class="rating">
            <div>
              9.56/10
              <img class="bigStar" src="/src/assets/star_big.svg" alt="movie rate of which is the best movie right now, totaly free and best quality">
          </div>
          </figure>
          <figure
            class="add-favorite">
            <img class="bookmark" src="/src/assets/bookmark_add.svg" alt="add your favorite movie to watch later, totaly free">
          </figure>

          <div class="movie-data">
            <p class="title">Aquaman y el Reino perdido</p>
            <figure class="classification"><p>PG-13</p></figure>
            <p class="category">Action, Adventure, Fantasy </p>
            <p class="date">Out on: 12/22/2023</p>
            <div class="trailer">
              <p class="trailer-description">watch trailer</p>
              <img class="play--enabled" src="/src/assets/play_enabled.svg" alt="movie trailers"/>
            </div>
          </div>
         </div>
       </div>
        `
    }
}*/
