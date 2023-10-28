class Popup {
  /**
   *
   * @param {string|HTMLElement} popup
   */
  constructor(popup) {
    this.popup =
      typeof popup === "string" ? document.querySelector(popup) : popup;
    this.popup.addEventListener("click", this.hide.bind(this));
  }

  hide(e = null) {
    if (!e) {
      this.popup.classList.remove("active");
    }

    if (
      e.target.classList.contains("popup") ||
      e.target.closest(".popup__close-btn")
    ) {
      this.popup.classList.remove("active");
      document.body.classList.remove("freeze");
      document.documentElement.classList.remove("padding");
    }
  }

  show() {
    this.popup.classList.add("active");
    document.body.classList.add("freeze");
    document.documentElement.classList.add("padding");
  }

  setMessage(title, message, type = "SUCCESS") {
    switch (type) {
      case "SUCCESS": {
        this.popup.querySelector(".popup__result-message").textContent = title;
        this.popup.querySelector(".popup__result-text").textContent = message;
        break;
      }
      case "ERROR":
      default: {
        this.popup.querySelector(".popup__result-message").textContent = title;
        this.popup.querySelector(".popup__result-text").textContent = message;
      }
    }
    return this;
  }
}

export default Popup;
