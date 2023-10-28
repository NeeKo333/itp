import "./index.html";
import "./index.scss";
import mask from "./js/mask.js";
import Form from "./js/form";
import Popup from "./js/popup";

window.addEventListener("DOMContentLoaded", () => {
  const popup = new Popup(".popup-info");
  const messagePopup = new Popup(".popup-message");
  const btn = document.querySelector(".test");

  new Form(".hero-section__form", messagePopup);
  mask("tel");
  // btn.addEventListener("click", popup.show.bind(popup));
});
