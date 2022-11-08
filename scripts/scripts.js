const popupCloseBtns = document.querySelectorAll(".popup__close-button");

/*переменные попапа редактирования*/
const editPopup = document.querySelector(".popup_type_edit");
const openEditPopupBtn = document.querySelector(".profile__edit-button");
const popupEditForm = editPopup.querySelector("#form-edit");
const nameProfile = document.querySelector(".profile__name");
const nameInput = editPopup.querySelector(".popup__text_type_name");
const descriptionProfile = document.querySelector(".profile__description");
const descriptionInput = editPopup.querySelector(".popup__text_type_description");

/*переменные для новой страницы*/
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
const cardsContainer = document.querySelector(".elements__container");
const elementTemplate = document.querySelector("#tempalate-card").content;

/*переменные попапа создания карточки (открыть/закрыть)*/
const addPopup = document.querySelector(".popup_type_add");
const addPopupBtn = document.querySelector(".profile__add-button");
const popupAddForm = document.querySelector("#form-add");
const locInput = addPopup.querySelector(".popup__text_type_loc");
const linkInput = addPopup.querySelector(".popup__text_type_link");
const popupSaveBtn = addPopup.querySelector(".popup__save-button");

/*переменные попапа увеличения фотографии*/
const imgPopup = document.querySelector(".popup_type_img");

/*открытие любого попапа*/
function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupByEsc);
};

/*закрытие любого попапа*/
function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupByEsc);
};

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

//закрытие попаов по нажатию на Esc
const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const modalOpened = document.querySelector('.popup_active');
    closePopup(modalOpened);
  };
};

/*открытие попапа редактирования*/
openEditPopupBtn.addEventListener("click", () => {
  openPopup(editPopup);
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
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

function createCard(name, link) {
  const elementPlace = elementTemplate.querySelector(".elements__card").cloneNode(true);
  const elementCardTitle = elementPlace.querySelector(".elements__text");
  elementCardTitle.textContent = name;
  const elementCardImg = elementPlace.querySelector(".elements__image");
  elementCardImg.src = link;
  elementCardImg.alt = name;

  /*кнопка удаления карточки*/
  const deleteButton = elementPlace.querySelector(".elements__remove-button");
  deleteButton.addEventListener("click", (evt) => {
    elementPlace.remove();
  });

  /*кнопка лайка*/
  const likeButton = elementPlace.querySelector(".elements__like-button");
  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("elements__like-button_active");
  });

  /*открытие попапа фотографии*/
  elementCardImg.addEventListener("click", () => {
    const fullCardImg = document.querySelector(".popup__full-photo");
    const descriptionCardImg = document.querySelector (".popup__full-photo-description");
    fullCardImg.setAttribute("src", link);
    fullCardImg.setAttribute("alt", name);
    descriptionCardImg.textContent = name;
    openPopup(imgPopup);
  })

  return elementPlace;
};

/*открытие попапа создания карточки*/
addPopupBtn.addEventListener ("click", () => {
  openPopup(addPopup);
});

/*сохранение данных попапа создания карточки по кнопке 'Создать'*/
popupAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newName = locInput.value;
  const newLink = linkInput.value;
  renderCard(cardsContainer, createCard(newName, newLink));
  disabledBtn({disabledBtnClass: 'popup__save-button_disabled'}, popupSaveBtn);
  closePopup(addPopup);
  evt.target.reset();
});