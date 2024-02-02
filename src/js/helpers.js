import { IMAGE_BASE_URL } from "./config.js";

/**
 * Fetches data from a URL asynchronously.
 * @param {string} Url - The URL to fetch data from
 * @param {Function} callBack - The callback function to call with the fetched data
 * @param {any} [optionalParameter] - An optional parameter to pass to the callback
 * @returns {Promise} A promise that resolves with the data returned by the callback
 * @throws {Error} Any error that occurs in the fetch or data parsing
 */
export const getServerData = async function (Url, callBack, optionalParameter) {
  try {
    const res = await fetch(Url);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch getting Popular Movies (HTTP status ${res.status})`
      );
    }
    const data = await res.json();

    return callBack(data, optionalParameter);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Converts a list of genre IDs to a string of genre names.
 * @param {number[]} genIds - Array of genre IDs
 * @param {Object} genres - Object mapping genre IDs to names
 * @returns {string} Comma-separated string of genre names
 */
export const asString = function (genIds, genres) {
  let newGenreList = [];

  genIds.forEach((id) => {
    if (id in genres) {
      newGenreList.push(genres[id]);
    }
  });
  return newGenreList.join(", ");
};

export const getMovieList = function (urlParam, pathName) {
  window.localStorage.clear();
  window.localStorage.setItem("pathName", pathName);
  window.localStorage.setItem("urlParam", urlParam);
};

export const createMovieCard = function (movie) {
  const { poster_path, title, vote_average, release_date, id } = movie;

  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img
        src="${IMAGE_BASE_URL}w342${poster_path}"
        alt="${title}"
        class="img-cover"
        loading="lazy"
      />
    </figure>

    <h4 class="title">${title}</h4>

    <div class="meta-list">
      <div class="meta-item">
      <span class="material-symbols-outlined ${
        vote_average >= 8.4 ? "top-rated" : ""
      }" style="color: #FFD700">
      grade
      </span>

        <span class="span">${vote_average.toFixed(1)}</span>
      </div>

      <div class="card-badge">${
        !release_date ? "" : release_date.split("-")[0]
      }</div>
    </div>

    <a href="./detail.html" title="${title}" class="card-btn"></a>
  `;

  card.querySelector(".card-btn").addEventListener("click", function () {
    getMovieList(id, title);
  });
  return card;
};
