import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popup){
        super(popup);
        this._popupFullPhoto = this._popup.querySelector(".popup__full-photo");
        this._popupFullPhotoDescription = this._popup.querySelector(".popup__full-photo-description");
    }

    open({ name, link }){
        super.open();

        this._popupFullPhoto.src = link;
        this._popupFullPhoto.alt = name;
        this._popupFullPhotoDescription.textContent = name;
    }
}