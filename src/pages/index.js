import './index.css';

import Card from "../components/Card.js";

import { selectors, FormValidator } from "../components/FormValidator.js"; 

import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import UserInfo from "../components/UserInfo.js";

import { 
  initialCards, 
  editPopup, 
  openEditPopupBtn, 
  nameInput,
  descriptionInput,
  cardsContainer,
  addPopup,
  addPopupBtn,
  imgPopup,
  popupForm
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
const popupFigure = new PopupWithImage(".popup_type_img", ".popup__full-photo", ".popup__full-photo-description");
popupFigure.setEventListeners();

//добавление карточки
const popupFormAddCard = new PopupWithForm(".popup_type_add", {
  handleSubmit: (data) => {
    const newValues = { name: data.place, link: data.link };
    const card = createCard(newValues);
    cardList.addItem(card);
    popupFormAddCard.close();
  },
});
popupFormAddCard.setEventListeners();

//редактирование профиля
const userInfo = new UserInfo('.profile__name', '.profile__description')

const popupFormEditCard = new PopupWithForm(".popup_type_edit", {
  handleSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupFormEditCard.close();
  }
});
popupFormEditCard.setEventListeners();

//слушатели на кнопки
addPopupBtn.addEventListener('click', () => {
  popupFormAddCard.open();
  addCardFormValidator.resetValidation();
});

openEditPopupBtn.addEventListener('click', () => {
  popupFormEditCard.open();
  editProfileFormValidator.resetValidation();
  popupFormEditCard.setInputValues(userInfo.getUserInfo());
});

//валидация форм
const editProfileFormValidator = new FormValidator(selectors, editPopup);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(selectors, addPopup);
addCardFormValidator.enableValidation();