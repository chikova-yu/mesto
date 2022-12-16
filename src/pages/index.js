import './index.css';

import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js"; 

import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import UserInfo from "../components/UserInfo.js";

import { 
  initialCards, 
  openEditPopupBtn, 
  nameInput,
  descriptionInput,
  cardsContainer,
  addPopupBtn,
} 
from "../utils/constants.js";

/*создание карточки*/
const createCard = (item) => {
  const card = new Card(item, '#tempalate-card', {
    handleCardClick: () => {
      popupFigure.open(item)
    }}
  );
  const cardElement = card.generateCard();
  return cardElement;
};

//отрисовка элементов
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card)
  }}, cardsContainer
);
cardList.renderItems(initialCards);

//открытие фотографии с описанием
const popupFigure = new PopupWithImage(".popup_type_img");
popupFigure.setEventListeners();

//добавление карточки
const popupFormAddCard = new PopupWithForm(".popup_type_add", {
  handleSubmit: (item) => {
    const newValues = { name: item.place, link: item.link };
    const card = createCard(newValues);
    cardList.addItem(card);
    popupFormAddCard.close();
  },
});
popupFormAddCard.setEventListeners();

//редактирование профиля
const userInfo = new UserInfo({name: '.profile__name', info: '.profile__description'})

const popupFormEditCard = new PopupWithForm(".popup_type_edit", {
  handleSubmit: (item) => {
    userInfo.setUserInfo(item);
  }
});
popupFormEditCard.setEventListeners();

//слушатели на кнопки
addPopupBtn.addEventListener('click', () => {
  popupFormAddCard.open();
});

openEditPopupBtn.addEventListener('click', () => {
  popupFormEditCard.open();
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  descriptionInput.value = user.info;
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