"use strict";
class BaseView {
  #sidebar = document.querySelector(".sidebar");

  _menu = document.querySelector(".menu");
  _menuBtn = document.querySelector(".menu-btn");
  _menuClose = document.querySelector(".close");

  #search = document.querySelector(".search");
  _searchBtn = document.querySelector(".search-btn");
  _searchIcon = document.querySelector(".search-icon");

  constructor() {
    this._menuBtn.addEventListener("click", this._menuBtnStart.bind(this));
    this._searchBtn.addEventListener("click", this.toggleSearch.bind(this));
  }

  _menuBtnStart() {
    this._toggleMenu();
    this.#sidebar.classList.toggle("active");
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  }
  _toggleMenu() {
    this._menu.classList.toggle("hidden");
    this._menuClose.classList.toggle("hidden");
  }

  _isSmallScreen() {
    return window.matchMedia("(max-width: 650px)").matches;
  }

  _toggleSearchOnSmallDevices() {
    const logo = document.querySelector(".logo");
    if (this.#sidebar.classList.contains("active")) {
      this.#sidebar.classList.remove("active");
      const container = document.querySelector(".container");
      container.classList.toggle("active");
      this._toggleMenu();
    }
    this._menuBtn.classList.toggle("hidden");
    this._searchBtn.classList.toggle("search-btn--animation");
    logo.classList.toggle("hidden");
  }

  toggleSearch() {
    this._searchIcon.classList.toggle("active");
    const inputField = document.querySelector(".input-field");
    if (this._isSmallScreen()) {
      this._toggleSearchOnSmallDevices();
    }
    this.#search.classList.toggle("active");
    inputField.focus();
  }
}

const base = new BaseView();
export default base;
