import { imgPopup } from "./constants.js";

export class Card {
    
    cardSelector;
    cardTemplate;
    elementPlace;
    elementCardTitle;
    elementCardImg;
    name;
    link;
    deleteButton;
    likeButton;

    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;

        this.fullCardImg = document.querySelector(".popup__full-photo");
        this.descriptionCardImg = document.querySelector (".popup__full-photo-description");

        this._getTemplate();
    }

    _getTemplate() {
        this.cardTemplate = document
        .querySelector(this._cardSelector)
        .content
        .querySelector(".elements__card");
    }

    generateCard() {
        this.elementPlace = this.cardTemplate.cloneNode(true);

        this.elementCardTitle = this.elementPlace.querySelector(".elements__text");
        this.elementCardTitle.textContent = this._name;

        this.elementCardImg = this.elementPlace.querySelector(".elements__image");
        this.elementCardImg.src = this._link;
        this.elementCardImg.alt = this._name;

        this.deleteBtn = this.elementPlace.querySelector(".elements__remove-button");
        this.likeBtn = this.elementPlace.querySelector(".elements__like-button");

        this._setListeners();

        return this.elementPlace;
    }

    _removeCard() {
        this.elementPlace.remove();
    }

    _likeCard() {
        this.likeBtn.classList.toggle("elements__like-button_active");
    }

    _openCardImg() {
        this.fullCardImg.src = this._link;
        this.fullCardImg.alt= this._name;
        this.descriptionCardImg.textContent = this._name;
        imgPopup.classList.add('popup_active');
      }

    _setListeners() {
        this.deleteBtn.addEventListener("click", () => {
            this._removeCard();
        });

        this.likeBtn.addEventListener("click", () => {
            this._likeCard();
        });

        this.elementCardImg.addEventListener("click", () => {
            this._openCardImg();
        });
    }
}