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

//валидация форм
const editProfileFormValidator = new FormValidator(selectors, editPopup);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(selectors, addPopup);
addCardFormValidator.enableValidation();

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
const popupFigure = new PopupWithImage(imgPopup);
popupFigure.setEventListeners();

//добавление карточки
const popupFormAddCard = new PopupWithForm(addPopup, newValues => {
  const card = createCard(newValues)
  cardList.addItem(card)
});
popupFormAddCard.setEventListeners();

//редактирование профиля
const userInfo = new UserInfo({ name: '#profile-name', info: '#profile-description' })

const popupFormEditCard = new PopupWithForm(editPopup, () =>{
  userInfo.setUserInfo(nameInput, descriptionInput)
  popupFormEditCard.close()
});
popupFormEditCard.setEventListeners();

//слушатели на кнопки
addPopupBtn.addEventListener('click', () => {
  popupFormAddCard.open()
  addCardFormValidator.resetValidation()
});

openEditPopupBtn.addEventListener('click', () => {
  const user = userInfo.getUserInfo()
  editProfileFormValidator.resetValidation()

  nameInput.value = user.name
  descriptionInput.value = user.info
  popupFormEditCard.open()
});