export class Card {
    cardTemtlate;
    elementPlace;
    elementCardTitle;
    elementCardImg;
    name;
    link;
    deleteButton;
    likeButton;
    openCardImg;

    constructor(name, link, openCardImg) {
        this._name = name;
        this._link = link;
        this._openCardImg = openCardImg;
        this._getTemplate();
    }

    _getTemplate() {
        this.cardTemtlate = document
        .querySelector("#tempalate-card")
        .content.querySelector(".elements__card");
    }

    generateCard() {
        this.elementPlace = this.cardTemtlate.cloneNode(true);

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

    _setListeners() {
        this.deleteBtn.addEventListener("click", () => {
            this._removeCard();
        });

        this.likeBtn.addEventListener("click", () => {
            this._likeCard();
        });

        this.elementCardImg.addEventListener("click", () => {
            this._openCardImg(this._name, this._link);
        });
    }
}