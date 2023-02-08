export default class Card {
    constructor({ data, handleConfirmDelete, handleLikeClick, handleCardClick }, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;

        this._userId = data.currentUserId;
        this._id = data._id;
        this._creatorId = data.owner._id;

        this._cardSelector = cardSelector;
        
        this.elementCardTitle = this.cardTemplate.querySelector(".elements__text");
        this.elementCardImg = this.cardTemplate.querySelector(".elements__image");
        this.deleteBtn = this.cardTemplate.querySelector(".elements__remove-button");
        this.likeBtn = this.cardTemplate.querySelector(".elements__like-button");
        this.likesNumber = this.cardTemplate.querySelector(".elements__like-number");

        this._handleCardClick = handleCardClick;
        this._handleConfirmDelete = handleConfirmDelete;
        this._handleLikeClick = handleLikeClick;

        this._getTemplate();
    }

    _getTemplate() {
        this.cardTemplate = document
        .querySelector(this._cardSelector)
        .content
        .querySelector(".elements__card")
        .cloneNode(true)
    }

    //создание карточки
    renderCard() {
        this.elementCardTitle.textContent = this._name;
        this.elementCardImg.src = this._link;
        this.elementCardImg.alt = this._name;

        this._updateLikesView();

        this._setListeners();

    }

    _updateLikesView() {
        this.likesNumber.textContent = this._likes.length;
    
        if (this.isLiked()) {
            this.likeBtn.classList.add('elements__like-button_active')
        }
        else {
            this.likeBtn.classList.remove('elements__like-button_active')
        }
    }

    isLiked() {
        return Boolean(this._likes.find(item => item._id === this._userId));
    }

    setLikesInfo(data) {
        this._likes = data.likes;
        this._updateLikesView();
    }

    //удаление карточки
    removeCard() {
        this.cardTemplate.remove();
    }

    id() {
        return this._id;
    }

    _setListeners() {
        this.deleteBtn.addEventListener("click", () => {
            this._handleConfirmDelete();
        });

        this.likeBtn.addEventListener("click", () => {
            this._handleLikeClick();
        });

        this.elementCardImg.addEventListener('click', () => {
            this._handleCardClick({ name: this._name, src: this._link })
        })
    }
}