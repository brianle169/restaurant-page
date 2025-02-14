import "./style.css";
import { AboutPage } from "./page_modules/about-page.js";
import { MenuPage } from "./page_modules/menu-page.js";
import { ReservationPage } from "./page_modules/reservation-page.js";

const mainModule = (() => {
  const content = document.querySelector("header");
  const contentParent = document.querySelector("body");
  let currentPage = "";
  let currentTarget;

  let windowLoadHandler = () => {
    content.insertAdjacentElement("afterend", ReservationPage());
    navBtns[2].classList.add("selected");
    currentPage = navBtns[2].value;
    currentTarget = navBtns[2];
  };

  let navClickHandler = (event) => {
    // remove selected class => for styling
    currentTarget.classList.remove("selected");
    // add classList to current target
    event.target.classList.add("selected");
    currentTarget = event.target;
    event.preventDefault();
    switch (currentTarget.value) {
      case "about": {
        contentParent.removeChild(content.nextSibling);
        content.insertAdjacentElement("afterend", AboutPage());
        break;
      }
      case "menu": {
        contentParent.removeChild(content.nextSibling);
        content.insertAdjacentElement("afterend", MenuPage());
        break;
      }
      case "reservation": {
        contentParent.removeChild(content.nextSibling);
        content.insertAdjacentElement("afterend", ReservationPage());
        break;
      }
    }
  };

  return { windowLoadHandler, navClickHandler };
})();

const navBtns = document.querySelectorAll(".nav-btn");
navBtns.forEach((btn) => {
  btn.addEventListener("click", mainModule.navClickHandler);
});

window.onload = mainModule.windowLoadHandler;
