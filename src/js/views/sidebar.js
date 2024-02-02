import { getMovieList } from "../helpers";
export const getMovieList = function (urlParam, genreName) {
  window.localStorage.clear();
  window.localStorage.setItem("genreName", genreName);
  window.localStorage.setItem("urlParam", urlParam);
};

export default class Sidebar {
  #genres;
  #parentElement = document.querySelector(".sidebar");

  constructor({ genres }) {
    this.#genres = Object.entries(genres);
    this._init();
  }

  _init() {
    this._innerParentElement();
    const languages = [
      ["en", "English"],
      ["es", "Spanish"],
      ["zh", "Chinese"],
      ["hi", "Hindi"],
      ["ar", "Arabic"],
      ["ko", "Korean"],
    ];
    this._createNavList("Languages", languages);
    this._createNavList("Genres", this.#genres);
    this._addNavItemsHandlers();
  }

  _innerParentElement() {
    this.#parentElement.innerHTML = `
        <div class="sidebar-inner">
          <div class="sidebar-contact">
            <p class="copyright">
              © 2024
              <a href="https://github.com/IvanMendozaMendoza">Ivan Mendoza Mendoza.</a>
              <br />
              All rights reserved.
            </p>
          </div>
        </div>`;
  }

  _createNavList(title, itemsList) {
    const list = document.createElement("div");
    list.classList.add("sidebar-list");
    list.innerHTML = `
        <p class="list-title">${title}</p>
      `;
    itemsList.forEach((item, index) => {
      let child;
      if(title === 'Languages'){
        child = `<a href="list.html" class="list-item" path="with_original_language=${item[0]}">${item[1]}</a>`
      } else {
        child = `<a href="list.html" class="list-item" path="with_genres=${item[0]}">${item[1]}</a>`
      }
      list.insertAdjacentHTML("beforeend", child);
    });
    this.#parentElement
      .querySelector(".sidebar-inner")
      .insertAdjacentElement("afterbegin", list);
  }

  _addNavItemsHandlers() {
    const languageLinks = this.#parentElement.querySelectorAll(".list-item");
    languageLinks.forEach((link) => {
      const linkName = link.textContent;
      const path = link.getAttribute('path');
      link.addEventListener("click", () => getMovieList(path,linkName));
    });
  }
}
