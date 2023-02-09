import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popup) {
    super(popup);
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
    super.setEventListeners();
  }
}