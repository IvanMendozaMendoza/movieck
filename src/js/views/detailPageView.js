import { IMAGE_BASE_URL } from "../config";
import { createMovieCard } from "../helpers";

export default class DetailPage {
  #parentElement = document.getElementById("page-detail");
  #movieId = window.localStorage.getItem("urlParam");
  constructor(fetchMovieFunc, moviesRecom) {
    if (!this.#parentElement) return;
    this._init(fetchMovieFunc);
    this._showSugestedMovies(moviesRecom);
  }

  async _init(getMovie) {
    const movie = await getMovie(this.#movieId);
    const {
      backdrop_path,
      poster_path,
      title,
      release_date,
      runtime,
      vote_average,
      releases: {
        countries: [{ certification }],
      },
      genres,
      overview,
      casts: { cast, crew },
      videos: { results: videos },
    } = movie;

    document.title = `${title} | Movieck Catalog: Explore a Diverse Collection of Movies`;

    const detail = document.createElement("div");
    detail.classList.add("movie-detail");
    detail.innerHTML = ` 
      <div
        class="backgrop-image"
        style="background-image: url('${IMAGE_BASE_URL}${
      "w1280" || "original"
    }${backdrop_path || poster_path}')"
      ></div>

      <figure class="poster-box movie-poster">
        <img
          src="${IMAGE_BASE_URL}w342${poster_path}"
          alt="${title}"
          class="img-cover"
        />
      </figure>

      <div class="detail-box">
        <div class="detail-content">
          <h1 class="heading">${title}</h1>

          <div class="meta-list">
            <div class="meta-item">
            <span class="material-symbols-outlined ${
              vote_average >= 8.4 ? "top-rated" : ""
            }" style="color: #FFD700">
              grade
              </span>
              <span class="span">${vote_average.toFixed(1)}</span>
            </div>

            <div class="separator"></div>
            <div class="meta-item">${runtime}m</div>

            <div class="separator"></div>
            <div class="meta-item">${release_date}</div>

            <div class="card-item card-badge">${certification}</div>
          </div>

          <div class="genre">${this._getGenres(genres)}</div>

          <div class="description">
           ${overview}
          </div>
        </div>
        <ul class="detail-list">
          <div class="list-item">
            <div class="list-name">Directed By</div>

            <p>${this._getDirectors(crew)}</p>
          </div>
          <!-- ####### -->
          <div class="list-item">
            <div class="list-name">Starring</div>

            <div class="slider-list">
              <div class="slider-inner cast-container"></div>
            </div>
          </div>
        </ul>

        <div class="title-wrapper">
          <h3 class="title-large">Trailers and clips</h3>
        </div>

        <div class="slider-list">
          <div class="slider-inner video-container"></div>
        </div>
      </div>
    `;
    if(!this._filterVideos(videos).length == 0)console.log('first')

    this._filterVideos(videos).forEach(({ key, name }) => {
      const videoCard = document.createElement("div");
      videoCard.classList.add("video-card");
      videoCard.innerHTML = `
        <iframe 
        width="500" 
        height="294" 
        src="https://www.youtube.com/embed/${key}?theme=dark&color=white&rel=0"
        frameborder="0"
        allowfullscreen="1"
        title="${name}"
        class="img-cover"
        loading="lazy"
        >
        </iframe> 
        `;
      detail.querySelector(".video-container").appendChild(videoCard);
    });

    this._getCast(cast).forEach(
      ({ character, original_name, profile_path }) => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `
            <div class="user-card">
            <figure class="poster-box">
              <img
                src="${IMAGE_BASE_URL}w342${profile_path}"
                alt="user card"
                class="img-cover"
                loading="lazy"
              />
            </figure>
            <div class="title-wrapper">
              <h3 class="user-name">${original_name}</h3>
            </div>
          </div>
            `;
        detail.querySelector(".cast-container").appendChild(userCard);
      }
    );

    this.#parentElement.insertAdjacentElement("afterbegin", detail);
  }

  _getGenres(genres) {
    const genreNames = genres.map(({ name }) => name);
    return genreNames.join(", ");
  }

  _getDirectors(crewList) {
    const directors = crewList.filter(({ job }) => job === "Director");
    const names = directors.map(({ name }) => name);
    return names.join(", ");
  }

  _filterVideos(videoList) {
    return videoList.filter(
      ({ type, site }) =>
        type === "Teaser" || (type === "Trailer" && site === "Youtube")
    );
  }

  _getCast(castList) {
    return castList.filter(
      ({ profile_path }) => profile_path !== null && profile_path !== undefined
    );
  }

  async _showSugestedMovies(getMovRecom) {
    const movies = await getMovRecom(this.#movieId);

    const movieListEl = document.createElement("section");
    movieListEl.classList.add("movie-list");
    movieListEl.ariaLabel = "Suggested Movies";
    movieListEl.innerHTML = `
      <div class="title-wrapper">
        <h3 class="title-large">You May Also Like</h3>
      </div>

      <div class="slider-list">
        <div class="slider-inner"></div>
      </div>
    `;

    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      movieListEl.querySelector(".slider-inner").appendChild(movieCard);
    });

    this.#parentElement.insertAdjacentElement('beforeend', movieListEl)
  }
}
