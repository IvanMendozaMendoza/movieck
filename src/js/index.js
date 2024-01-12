"use strict";
// HEADER VIEW
const sidebar = document.querySelector(".sidebar");

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".close");

const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");
const searchIcon = document.querySelector(".search-icon");

const toggleMenu = function () {
  menu.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
};

function isSmallScreen() {
  return window.matchMedia("(max-width: 650px)").matches;
}

const toggleSearchOnSmallDevices = function () {
  const logo = document.querySelector(".logo");
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    toggleMenu();
  }
  menuBtn.classList.toggle("hidden");
  searchBtn.classList.toggle("search-btn--animation");
  logo.classList.toggle("hidden");
};

function toggleSearch() {
  searchIcon.classList.toggle("active");
  const inputField = document.querySelector(".input-field");
  if (isSmallScreen()) {
    toggleSearchOnSmallDevices();
  }
  search.classList.toggle("active");
  inputField.focus();
}

menuBtn.addEventListener("click", function () {
  toggleMenu();
  sidebar.classList.toggle("active");
  const s = document.querySelector('.container');
  s.classList.toggle('active')
});
searchBtn.addEventListener("click", toggleSearch);
