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

let userId;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: 'a88d88e2-8099-4329-b331-cfa0f8f3f7b5',
    'Content-Type': 'application/json'
  }
});

/*создание карточки*/
const createCard = (data) => {

  const card = new Card( 
    {
      data: data,

      handleCardClick: () => popupFigure.open(data),

      handleLikeClick: () => card.handleLikeCard(),

      handleConfirmDelete: () => {
        confirmDeletePopup.setSubmitAction( _ => {
        confirmDeletePopup.renderLoadingWhileDeleting(true)
          api.deleteCard(data._id)
            .then( () => {
              card.removeCard()
              confirmDeletePopup.close()
            })
            .catch((err) => console.log(err))
            .finally( _ => confirmDeletePopup.renderLoadingWhileDeleting(false))
        })
        confirmDeletePopup.open()
      }
    },
    '#tempalate-card',
    api,
    userId
  )

  return card
};

//сохранение формы
const confirmDeletePopup = new PopupWithConfirm('.popup_type_delete')
confirmDeletePopup.setEventListeners();

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

//редактирование профиля
const userInfo = new UserInfo({
  name: '.profile__name', 
  info: '.profile__description',
  avatar: '.profile__avatar'
})

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
    .finally( _ => popupFormAddCard.renderLoading(true))
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

//открытие фотографии с описанием
const popupFigure = new PopupWithImage(".popup_type_img");
popupFigure.setEventListeners();

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

Promise.all([ api.getInfoProfile(), api.getInitialCards() ])
  .then(([ userData, initialCards ]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
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