export default class Card {
    constructor(data, cardSelector, myID, { handleCardClick, handleLikeCard, handleDislikeCard, handleDeleteCard }) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;

        this._myID = myID;
        this._creatorID = data.owner._id;

        this._handleCardClick = handleCardClick;
        this._handleLikeCard = handleLikeCard;
        this._handleDislikeCard = handleDislikeCard;
        this._handleDeleteCard = handleDeleteCard;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".elements__card")
            .cloneNode(true)

        return cardElement;
    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }

    _getLikeInfo = () => this._data.likes.some((item) => item._id === this._myID);

    _changeLikeState = () => {
        if (this._getLikeInfo()) {
            this._handleDislikeCard(this._data);
        } else {
            this._handleLikeCard(this._data);
        }
    };
  
    _updateLikeState(data) {
      this._data.likes = data.likes;
      this.likeNumber.textContent = String(this._data.likes.length);
    }
  
    likeCard(data) {
      this.likeBtn.classList.add("elements__like-button_active");
      this._updateLikeState(data);
    }
  
    dislikeCard(data) {
      this.likeBtn.classList.remove("elements__like-button_active");
      this._updateLikeState(data);
    }
  
    _setEventListeners() {
      this.deleteBtn.addEventListener("click", () => {
        this._handleDeleteCard(this);
      });
      this.likeBtn.addEventListener("click", this._changeLikeState);
      this.elementCardImg.addEventListener("click", () =>
        this._handleCardClick(this._data)
      );
    }
  
    _chekCardOwner() {
      if (this._myID !== this._creatorID) {
        this.deleteBtn.remove();
      }
    }
  
    _checkLikeOwner() {
      if (this._getLikeInfo()) {
        this.likeCard(this._data);
      }
    }

    generateCard() {
        this._element = this._getTemplate();

        this.elementCardTitle = this._element.querySelector(".elements__text");
        this.elementCardTitle.textContent = this._name;

        this.elementCardImg = this._element.querySelector(".elements__image");
        this.elementCardImg.src = this._link;
        this.elementCardImg.alt = this._name;

        this.deleteBtn = this._element.querySelector(".elements__remove-button");
        this.likeBtn = this._element.querySelector(".elements__like-button");
        this.likeNumber = this._element.querySelector(".elements__like-number");

        this._checkLikeOwner();
        this._chekCardOwner();
        this._updateLikeState(this._data);

        this._setEventListeners();

        return this._element;
    }

}