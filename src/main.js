import "./style.css";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", () => {
  const toggal_dark = document.getElementById("dark_mood");
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.toggle("dark");
    toggal_dark.classList.toggle("active");
  }
  toggal_dark.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    toggal_dark.classList.toggle("active");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
AOS.init({
  duration: 500,
  once: true,
  easing: "ease-out-cubic",
});
