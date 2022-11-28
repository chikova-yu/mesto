import { Card } from "./Card.js";
import { selectors, FormValidator } from "./FormValidator.js"; 
import { initialCards, imgPopup } from "./constants.js";
import { openPopup, closePopup } from "./openclosepopup.js";

const popupCloseBtns = document.querySelectorAll(".popup__close-button");

/*переменные попапа редактирования*/
const editPopup = document.querySelector(".popup_type_edit");
const openEditPopupBtn = document.querySelector(".profile__edit-button");
const popupEditForm = editPopup.querySelector("#form-edit");
const nameProfile = document.querySelector(".profile__name");
const nameInput = editPopup.querySelector(".popup__text_type_name");
const descriptionProfile = document.querySelector(".profile__description");
const descriptionInput = editPopup.querySelector(".popup__text_type_description");

const cardsContainer = document.querySelector(".elements__container");

/*переменные попапа создания карточки (открыть/закрыть)*/
const addPopup = document.querySelector(".popup_type_add");
const addPopupBtn = document.querySelector(".profile__add-button");
const popupAddForm = document.querySelector("#form-add");
const locInput = addPopup.querySelector(".popup__text_type_loc");
const linkInput = addPopup.querySelector(".popup__text_type_link");
const popupSaveBtn = addPopup.querySelector(".popup__save-button");
const disabledSaveBtn = addPopup.querySelector("popup__save-button_disabled");

popupCloseBtns.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener("click", () => closePopup(popup));
});

//закрытие попапов по клику на оверлей
const closePopupByOverlayClick = (evt) => {
  if (evt.target.classList.contains('popup_active')) {
    closePopup(evt.target);
  };
};

[editPopup, addPopup, imgPopup].forEach(evt => evt.addEventListener('click', closePopupByOverlayClick))

/*открытие попапа редактирования*/
openEditPopupBtn.addEventListener("click", () => {
  openPopup(editPopup);
  nameInput.value = nameProfile.textContent.trim();
  descriptionInput.value = descriptionProfile.textContent.trim();
  editProfileFormValidator.resetValidation();
});

/*сохранение данных попапа редактирования по кнопке 'Сохранить'*/
popupEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(editPopup);
});

/*появление шести карточек из коробки на странице*/
initialCards.forEach((elementPlace) =>
  renderCard(cardsContainer, createCard(elementPlace.name, elementPlace.link))
);

function renderCard (cardsContainer, elementPlace){
  cardsContainer.prepend(elementPlace);
};

/*создание карточки*/
function createCard(name, link) {
  const card = new Card(name, link, '#tempalate-card');
  const elementPlace = card.generateCard();

  return elementPlace;
};

/*открытие попапа создания карточки*/
addPopupBtn.addEventListener ("click", () => {
  openPopup(addPopup);
  addCardFormValidator.resetValidation();
});

/*сохранение данных попапа создания карточки по кнопке 'Создать'*/
popupAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newName = locInput.value;
  const newLink = linkInput.value;
  renderCard(cardsContainer, createCard(newName, newLink));
  addCardFormValidator.disabledBtn(disabledSaveBtn, popupSaveBtn);
  closePopup(addPopup);
  evt.target.reset();
});

const editProfileFormValidator = new FormValidator(selectors, editPopup);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(selectors, addPopup);
addCardFormValidator.enableValidation();