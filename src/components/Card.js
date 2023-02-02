export default class Card {
    constructor(item, cardSelector, onRemove, handleLikeClick, { handleCardClick }) {
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;
        this._id = item.id;
        this._userId = item.userId;
        this._creatorId = item.creatorId;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;

        this.elementCardTitle = this.cardTemplate.querySelector(".elements__text");
        this.elementCardImg = this.cardTemplate.querySelector(".elements__image");
        this.deleteBtn = this.cardTemplate.querySelector(".elements__remove-button");
        this.likeBtn = this.cardTemplate.querySelector(".elements__like-button");
        this._likesNumber = this.cardTemplate.querySelector(".elements__like-number");

        this._onRemove = onRemove;
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

        this.checkDeleteBtn();
        this._handleLikesNumber();
        this._isLikedCard();

        this._setListeners();

        return this.cardTemplate;
    }

    //можно ли удалить карточку
    checkDeleteBtn() {
        if (this._userId !== this._creatorId) {
            this.deleteBtn.remove();
        }
    }

    //количество лайков
    _handleLikesNumber() {
        this._likesNumber.textContent = this._likes.length;
    }

    //чей лайк
    _isLiked() {
        return this._likes.some(like => like._id === this._userId);
    }
    
    //проверка лайка
    _isLikedCard() {
        this.likeBtn.classList.toggle("elements__like-button_active", this._isLiked());
    }

    //like-unlike
    likeCard(item) {
        this._likes = item.likes;
        this._isLikedCard();
        this._likesNumber();
    }

    //удаление карточки
    removeCard() {
        this.cardTemplate.remove();
    }

    _setListeners() {
        this.deleteBtn.addEventListener("click", () => {
            this._onRemove(this._id);
        });

        this.likeBtn.addEventListener("click", () => {
            this._handleLikeClick(this, !this._isLiked());
        });

        this.elementCardImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        })
    }
}