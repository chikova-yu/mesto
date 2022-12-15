const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const editPopup = document.querySelector(".popup_type_edit");
const openEditPopupBtn = document.querySelector(".profile__edit-button");
const nameInput = editPopup.querySelector(".popup__text_type_name");
const descriptionInput = editPopup.querySelector(".popup__text_type_description");
const cardsContainer = document.querySelector(".elements__container");
const addPopup = document.querySelector(".popup_type_add");
const addPopupBtn = document.querySelector(".profile__add-button");
const imgPopup = document.querySelector(".popup_type_img");
const nameSelector = ".profile__name";
const infoSelector = ".profile__description";
const popupWithImg = ".popup_type_img";
const imgSelector = ".popup__full-photo";
const captionSelector = "popup__full-photo-description";
const popupForm = document.querySelector('.popup__form');
const cardAddForm = popupForm.querySelector('.popup__form')

export {
  initialCards,
  editPopup, 
  openEditPopupBtn, 
  nameInput, 
  descriptionInput,
  cardsContainer,
  addPopup,
  addPopupBtn,
  imgPopup,
  nameSelector,
  infoSelector,
  popupWithImg,
  imgSelector,
  captionSelector,
  popupForm,
  cardAddForm
}