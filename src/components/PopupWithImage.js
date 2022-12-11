import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
    }

    open({ name, link }){
        super.open();
        this._popupFullPhoto = document.querySelector(".popup__full-photo");
        this._popupFullPhotoDescription = document.querySelector(".popup__full-photo-description");

        this._popupFullPhoto.src = link;
        this._popupFullPhoto.alt = name;
        this._popupFullPhotoDescription.textContent = name;
    }
}