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
const openEditPopupBtn = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__text_type_name");
const descriptionInput = document.querySelector(".popup__text_type_description");
const cardsContainer = document.querySelector(".elements__container");
const addPopupBtn = document.querySelector(".profile__add-button");

const approveDeleteCard = document.querySelector(".popup_type_delete-approve");
const popupAvatarEdit = document.querySelector(".popup_type_avatar");
const editAvatarBtn = document.querySelector(".profile__avatar-edit-button");

export {
  initialCards,
  openEditPopupBtn, 
  nameInput, 
  descriptionInput,
  cardsContainer,
  addPopupBtn,
  approveDeleteCard,
  popupAvatarEdit,
  editAvatarBtn
}