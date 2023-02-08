import './index.css';

import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js"; 

import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import UserInfo from "../components/UserInfo.js";

import Api from '../components/Api.js';

import PopupWithConfirm from '../components/PopupWithConfirm.js';

import { 
  initialCards, 
  openEditPopupBtn, 
  nameInput,
  descriptionInput,
  cardsContainer,
  addPopupBtn,
} 
from "../utils/constants.js";

//редактирование профиля
const userInfo = new UserInfo({
  name: '.profile__name', 
  info: '.profile__description',
  avatar: '.profile__avatar'
});

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: 'a88d88e2-8099-4329-b331-cfa0f8f3f7b5',
    'Content-Type': 'application/json'
  }
});

let userId;

//открытие фотографии с описанием
const popupFigure = new PopupWithImage(".popup_type_img");
popupFigure.setEventListeners();

//сохранение формы
const popupConfirmDelete = new PopupWithConfirm('.popup_type_delete')
popupConfirmDelete.setEventListeners();

/*создание карточки*/
const createCard = (cardData) => {
  const card = new Card( 
    {
      data: { ...cardData, currentUserId: userId },

      handleCardClick: () => popupFigure.open(cardData),

      handleLikeClick: (card) => {
        api.changeLikeCardStatus(card.id(), !card.isLiked())
        .then(data => {
          card.setLikesInfo({ ...data });
        })
        .catch(err => console.log(err))
      },

      handleConfirmDelete: (card) => {
        popupConfirmDelete.setSubmitAction(() => {
          popupConfirmDelete.renderLoadingWhileDeleting(true)
          api.deleteCard(card.id())
            .then(() => {
              card.removeCard()
              popupConfirmDelete.close()
            })
            .catch((err) => console.log(err))
            .finally(() => popupConfirmDelete.renderLoadingWhileDeleting(false))
        })
        popupConfirmDelete.open()
      }
    },
    '#tempalate-card'
  );

  return card;
};

//добавление карточки
const popupFormAddCard = new PopupWithForm(".popup_type_add", newValues => {
  popupFormAddCard.renderLoading(true)
  api.addCard(newValues)
    .then((data) => {
      const card = createCard(data)
      const cardElement = card.renderCard()
      cardList.addItem(cardElement)
      popupFormAddCard.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupFormAddCard.renderLoading(true))
  }
);
popupFormAddCard.setEventListeners();

const popupFormEditCard = new PopupWithForm(".popup_type_edit", newValues => {
  popupFormEditCard.renderLoading(true)
  api.editProfile(newValues)
    .then((data) => {
      userInfo.setUserInfo(data)
      popupFormEditCard.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupFormEditCard.renderLoading(false))
  }
);
popupFormEditCard.setEventListeners();

//редактирование аватара
const popupFormAvatar = new PopupWithForm(".popup_type_avatar", newValues => {
  popupFormAvatar.renderLoading(true)
  api.editAvatar(newValues)
    .then((data) => {
      userInfo.setUserAvatar(data)
      popupFormAvatar.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupFormAvatar.renderLoading(false))
})
popupFormAvatar.setEventListeners();

//отрисовка элементов
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    const cardElement = card.renderCard();
    cardList.addItem(cardElement);
  }}, cardsContainer
);
cardList.renderItems(initialCards);

//слушатели на кнопки
addPopupBtn.addEventListener('click', () => {
  popupFormAddCard.open();
  popupFormAddCard.renderLoading(false);
});

openEditPopupBtn.addEventListener('click', () => {
  popupFormEditCard.open();

  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  descriptionInput.value = userData.info;
});

//валидация форм
const selectors = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const formValidate = new FormValidator(config, formElement);
    formValidate.enableValidation();
  });
};

selectors({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitBtnSelector: '.popup__save-button',
  disabledBtnClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_visible',
});

Promise.all([ api.getInfoProfile(), api.getInitialCards() ])
  .then(([ user, initialCards ]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
});
