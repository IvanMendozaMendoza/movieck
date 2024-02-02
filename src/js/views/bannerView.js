"use strict";

import {
  IMAGE_BASE_URL,
  LIMIT_INDEX,
  RESET_INDEX_VALUE,
  SCROLL_STEP_VALUE,
  SCROLL_RESET_VALUE,
  SLIDER_INTERVAL_VALUE,
} from "../config";

import { asString } from "../helpers";
import { getMovieList } from "../helpers";

/* The `Banner` class is a JavaScript class that creates a banner slider component for displaying
popular movies, with controls for navigating through the slides. */
export default class Banner {
  #ctrlIndex = 0;
  #parentElement = document.getElementById("page-home");
  #banner = null;
  #cover = null;
  #moviesDB;

  constructor(data) {
    this.#moviesDB = data;
    this._init();
  }

  /**
   * Initializes the banner by:
   * - Creating the banner element
   * - Inserting it into the DOM
   * - Creating the image cover element
   * - Inserting the cover into the banner
   * - Rendering the banner controls
   * - Rendering the initial banner slider
   * - Adding click handlers to the controls to update the slider
   */
  _init() {
    if (!this.#parentElement) return;
    this._createBanner();
    this.#parentElement.insertAdjacentElement("afterbegin", this.#banner);
    this._createCover();
    this.#banner.insertAdjacentElement("afterbegin", this.#cover);

    // -------------------
    this._renderBannerControl();
    this._renderBannerSlider();
    // -----------------

    this.#banner.querySelectorAll("button").forEach((el) =>
      el.addEventListener("click", () => {
        this.#ctrlIndex = +el.getAttribute("slider-control");
        this._renderNewSlide();
        this._moveSliderControl(true);
      })
    );
  }

  /* Creates the banner element with necessary child elements and styling.
     The banner contains:
     - banner-content: div to hold banner slide content
     - slider-control 
       - control-inner: div to hold the banner control buttons
  */
  _createBanner() {
    this.#banner = document.createElement("section");
    this.#banner.classList.add("banner-slider");
    this.#banner.ariaLabel = "Popular Movies";

    this.#banner.innerHTML = `
    <div class="banner-content"></div>

    <div class="slider-control">
      <div class="control-inner"></div>
    </div>
  `;
  }

  /**
   * Creates the image cover element and adds necessary styling.
   * The cover overlays the banner and displays the backdrop image.
   */
  _createCover() {
    this.#cover = document.createElement("div");
    this.#cover.classList.add("img-cover");
  }

  /**
   * Renders the banner control.
   *
   * Iterates through the popular movies from the movie DB.
   * Creates a control item for each movie with the movie title, index, and poster path.
   * Appends the control item to the banner's control inner container.
   */
  _renderBannerControl() {
    this.#moviesDB.popularMovies.forEach((movie, index) => {
      const { title, poster_path } = movie;

      const item = this._createControlItem(index, title, poster_path);
      this.#banner.querySelector(".control-inner").appendChild(item);
    });
  }

  /**
   * Creates a control item for the banner slider.
   * @param {number} index - The index of the movie item
   * @param {string} title - The title of the movie
   * @param {string} poster_path - The path to the movie poster image
   * @returns {Element} - The created control item element
   */
  _createControlItem(index, title, poster_path) {
    const controlItem = document.createElement("button");
    controlItem.classList.add("poster-box", "slider-item");
    controlItem.setAttribute("slider-control", `${index}`);

    controlItem.innerHTML = `
          <img
            src="${IMAGE_BASE_URL}w154${poster_path}"
            alt="slide to ${title}"
            loading="lazy"
            draggable="false"
            class="img-cover"
          />
        `;
    return controlItem;
  }

  /**
   * Renders the banner slider.
   *
   * Calls _renderNewSlide() and _moveSliderControl() to initialize
   * the banner slider with the first slide.
   *
   * Sets an interval to call _updateBannerSlider() every x milliseconds
   * to rotate between slides automatically.
   */
  _renderBannerSlider() {
    this._renderNewSlide(), this._moveSliderControl();
    setInterval(() => this._updateBannerSlider(), SLIDER_INTERVAL_VALUE);
  }

  /**
   * Updates the banner slider by rendering a new slide
   * and moving the control to the next item.
   * @param {boolean} [reload=false] - Whether to reload the slides completely.
   */
  _updateBannerSlider(reload = false) {
    this._renderNewSlide();
    this._moveSliderControl(reload);
  }

  /**
   * Renders a new slide in the banner slider.
   * Clears existing content, extracts details of the movie at the current
   * index, sets the background image, generates HTML content, and inserts
   * it into the banner.
   */
  _renderNewSlide() {
    // Clear existing content
    this.#banner.querySelector(".banner-content").innerHTML = "";
    // Extract movie details
    const { backdrop_path, title } =
      this.#moviesDB.popularMovies[this.#ctrlIndex];

    // Set cover attributes
    this.#cover.setAttribute("alt", title);
    this.#cover.style.backgroundImage = `url('${IMAGE_BASE_URL}w1280${backdrop_path}')`;

    // Render HTML content
    const content = this._generateSlideContent(this.#ctrlIndex);

    // Insert content into the banner
    this.#banner
      .querySelector(".banner-content")
      .insertAdjacentHTML("afterbegin", content);
  }

  /**
   * Generates HTML content for a banner slide
   * using details of the movie at the given index.
   *
   * Extracts required data from the movie object,
   * formats it appropriately, and inserts it
   * into a HTML template string.
   */
  _generateSlideContent(movIndex) {
    // Date formatting
    const { title, release_date, genre_ids, overview, vote_average, id } =
      this.#moviesDB.popularMovies[movIndex];
    const releaseYear = release_date.split("-")[0];

    // Genre rendering using the asString function
    const genreString = asString(genre_ids, this.#moviesDB.genres);

    // HTML content generation
    const content = `
      <h2 class="heading">${title}</h2>
      <div class="meta-list">
        <div class="meta-item">${releaseYear}</div>
        <p class="meta-item genre">${genreString}</p>
        <div class="meta-item card-badge">${vote_average.toFixed(1)}</div>
      </div>
      <p class="description">${overview}</p>
      <a href="detail.html" class="btn" onClick="${getMovieList(id, title)}">
        <span class="material-symbols-outlined">play_circle</span>
        <span>Watch now</span>
      </a>
    `;
    return content
  }

  /**
   * Moves the banner slider to the next slide.
   * Handles updating the slider controls,
   * scrolling the slider,
   * and resetting at the end.
   *
   * @param {boolean} reload - Whether to reset the active state of controls.
   */
  _moveSliderControl(reload = false) {
    let lastControl =
      this.#banner.querySelectorAll("button")[
        this.#ctrlIndex === 0 ? LIMIT_INDEX : this.#ctrlIndex - 1
      ];

    let curControl = this.#banner.querySelectorAll("button")[this.#ctrlIndex];
    const inner = document.querySelector(".slider-control");

    if (reload === true) {
      this.#banner
        .querySelectorAll("button")
        .forEach((el) => el.classList.remove("active"));
    }

    // move slide
    if (this.#ctrlIndex >= 1 && this.#ctrlIndex <= LIMIT_INDEX) {
      inner.scrollBy({ behavior: "smooth", left: SCROLL_STEP_VALUE });
    }
    if (this.#ctrlIndex === 0) {
      inner.scrollBy({ behavior: "smooth", left: SCROLL_RESET_VALUE });
    }
    if (lastControl) {
      lastControl.classList.remove("active");
    }
    curControl.classList.add("active");

    if (this.#ctrlIndex === LIMIT_INDEX) {
      this.#ctrlIndex = RESET_INDEX_VALUE;
    } else {
      this.#ctrlIndex++;
    }
  }
}
