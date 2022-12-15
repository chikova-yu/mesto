export default class Card {
    constructor(item, cardSelector, { handleCardClick }) {
        this._name = item.name;
        this._link = item.link;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;

        this._getTemplate();
    }

    _getTemplate() {
        this.cardTemplate = document
        .querySelector(this._cardSelector)
        .content
        .querySelector(".elements__card")
        .cloneNode(true)
    }

    generateCard() {
        this.elementCardTitle = this.cardTemplate.querySelector(".elements__text");
        this.elementCardTitle.textContent = this._name;

        this.elementCardImg = this.cardTemplate.querySelector(".elements__image");
        this.elementCardImg.src = this._link;
        this.elementCardImg.alt = this._name;

        this.deleteBtn = this.cardTemplate.querySelector(".elements__remove-button");
        this.likeBtn = this.cardTemplate.querySelector(".elements__like-button");

        this._setListeners();

        return this.cardTemplate;
    }

    _removeCard() {
        this.cardTemplate.remove();
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

        this.elementCardImg.addEventListener('click', () => {
            this._handleCardClick(this._item)
        })
    }
}