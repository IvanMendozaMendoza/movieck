/**
 * DarkModeView handles toggling dark mode on the page.
 * It toggles a "dark" class on key elements and the overall
 * Bootstrap theme when dark mode is enabled. It also persists
 * the setting in localStorage.
 */
class DarkModeView {
  #darkModeEnabled = false;
  _parentElement = document.documentElement;
  _containerFluid = document.querySelector(".container-fluid");
  _navBar = document.querySelector(".navbar");
  _toggleButton = document.querySelector("#dark-mode-toggle");

  init() {
    this._toggleButton.addEventListener("click", () => this.toggleDarkMode());
    this.loadDarkModePreference();
  }

  loadDarkModePreference() {
    const darkModeSetting = localStorage.getItem("darkMode") === "enabled";
    this.#darkModeEnabled = darkModeSetting;
    if (darkModeSetting) {
      this.enableDarkMode();
    }
  }

  toggleDarkMode() {
    this.#darkModeEnabled = !this.#darkModeEnabled;
    if (this.#darkModeEnabled) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  toggleNavColor() {
    [this._containerFluid, this._navBar].forEach((el) => el.classList.toggle("dark"));
  }

  enableDarkMode() {
    this._parentElement.setAttribute("data-bs-theme", "dark");
    this._toggleButton.textContent = "Light mode";
    this.toggleNavColor();
    localStorage.setItem("darkMode", "enabled");
    this.#darkModeEnabled = true;
  }
  
  disableDarkMode() {
    this._parentElement.removeAttribute("data-bs-theme");
    this._toggleButton.textContent = "Dark mode";
    this.toggleNavColor();
    localStorage.setItem("darkMode", "disabled");
    this.#darkModeEnabled = false;
  }
}
export default new DarkModeView();