import "./style.css";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
// import { setupCounter } from "./counter.js";

document.addEventListener("DOMContentLoaded", () => {
  const toggal_dark = document.getElementById("dark_mood");
  toggal_dark.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    toggal_dark.classList.toggle("active");
  });
});
