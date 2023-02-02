export default class Card {
    constructor({data, handleConfirmDelete, handleLikeClick, handleCardClick }, api, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;

        this._id = data._id;
        this._creatorId = data.owner._id;
        this._userId = userId;
        this._api = api;

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
    generateCard() {
        this.elementCardTitle.textContent = this._name;
        this.elementCardImg.src = this._link;
        this.elementCardImg.alt = this._name;

        this._checkDeleteBtn();//
        this._handleLikesNumber();//
        this._isLikedCard();//

        this._setListeners();//

        return this.cardTemplate;
    }

    //можно ли удалить карточку
    _checkDeleteBtn() {
        if (!(this._creatorId === this._userId)) {
            this.deleteBtn.remove();
        }
    }

    //количество лайков
    _handleLikesNumber() {
        this._likesNumber.textContent = this._likes.length;

    }

    //проверка лайка
    _isLikedCard() {
        if(this._likes.find((obj) => this._userId === obj._id)) {
            this.likeBtn.classList.add("elements__like-button_active")
        }
    }

    //удаление карточки
    removeCard() {
        this.cardTemplate.remove();
    }

    handleLikeCard() {
        if(!(this.likeBtn.classList.contains('elements__like-button_active'))) {
          this._api.like(this._id)
            .then((data) => {
                this.likeBtn.classList.add('elements__like-button_active')
                this.likesNumber.textContent = data.likes.length
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          this._api.dislike(this._id)
            .then((data) => {
                this.likeBtn.classList.remove('elements__like-button_active')
                this.likesNumber.textContent = data.likes.length
            })
            .catch((err) => {
              console.log(err)
            })
        }
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