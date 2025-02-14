import "./style.css";
import { AboutPage } from "./page_modules/about-page.js";
import { MenuPage } from "./page_modules/menu-page.js";
import { ReservationPage } from "./page_modules/reservation-page.js";

const navBtns = document.querySelectorAll(".nav-btn");
const content = document.getElementById("content");
let currentPage = "";
let currentTarget;

let windowLoadHandler = () => {
  content.appendChild(AboutPage());
  navBtns[0].classList.add("selected");
  currentPage = navBtns[0].value;
  currentTarget = navBtns[0];
};

let navClickHandler = (event) => {
  // remove selected class => for styling
  currentTarget.classList.remove("selected");
  // add classList to current target
  event.target.classList.add("selected");
  currentTarget = event.target;
  switch (currentTarget.value) {
    case "about": {
      content.innerHTML = "";
      content.appendChild(AboutPage());
      break;
    }
    case "menu": {
      content.innerHTML = "";
      content.appendChild(MenuPage());
      break;
    }
    case "reservation": {
      content.innerHTML = "";
      content.appendChild(ReservationPage());
      break;
    }
  }
};

navBtns.forEach((button) => {
  button.addEventListener("click", navClickHandler);
});

window.onload = windowLoadHandler;
