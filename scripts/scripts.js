const popup_active = "popup_active";
const popup = document.querySelector(".popup");

/*переменные попапа редактирования*/
const editPopup = document.querySelector(".popup_type_edit");
const openEditPopupBtn = document.querySelector(".profile__edit-button");
const popupEditContainer = popup.querySelector(".popup__container_type_edit");
const popupEditCloseBtn = popup.querySelector("#close-button-edit");
const popupEditForm = popup.querySelector("#form-edit");
const nameProfile = document.querySelector(".profile__name");
const nameInput = popup.querySelector(".popup__text_type_name");
const descriptionProfile = document.querySelector(".profile__description");
const descriptionInput = popup.querySelector(".popup__text_type_description");

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
const elementCard = document.querySelector('.elements__container');
const elementTemplate = document.querySelector('#tempalate-card').content;

/*переменные попапа создания карточки (открыть/закрыть)*/
const addPopup = document.querySelector(".popup_type_add");
const addPopupBtn = document.querySelector('.profile__add-button');
const popupAddContainer = document.querySelector('.popup__container_type_add');
const popupAddCloseBtn = document.querySelector('#close-button-add');
const popupAddForm = document.querySelector('#form-add');

/*переменные попапа увеличения фотографии*/
const popupImg = document.querySelector('.popup_type_img');
const popupImgContainer = document.querySelector('.popup__img-container');
const popupImgCloseBtn = document.querySelector('#close-button-img');

/*открытие попапа редактирования*/
openEditPopupBtn.addEventListener("click", () => {
  editPopup.classList.add(popup_active);
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
});

/*закрытие попапа редактирования на иконку и оверлей*/
editPopup.addEventListener("click", (event) => {
  if(!popupEditContainer.contains(event.target) || event.target === popupEditCloseBtn) {
      editPopup.classList.remove(popup_active);
  };
});

/*сохранение данных попапа редактирования по кнопке 'Сохранить'*/
popupEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  editPopup.classList.remove(popup_active);
});

/*появление шести карточек из коробки на странице*/
function openWindow() {
  initialCards.forEach(outputCard);
}
openWindow();

function outputCard(item) {
  const elementPlace = elementTemplate.querySelector(".elements__card").cloneNode(true);
  const elementCardTitle = elementPlace.querySelector(".elements__text");
  elementCardTitle.textContent = item.name;
  const elementCardImg = elementPlace.querySelector(".elements__image");
  elementCardImg.src = item.link;
  elementCardImg.alt = item.name;
  elementCard.prepend(elementPlace);

  /*кнопка удаления карточки*/
  const deleteButton = elementPlace.querySelector('.elements__remove-button');
  deleteButton.addEventListener('click', (evt) => {
    evt.target.closest('.elements__card').remove();
  });

  /*кнопка лайка*/
  const likeButton = elementPlace.querySelector('.elements__like-button');
  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-button_active');
  });

  /*открытие попапа фотографии*/
  elementCardImg.addEventListener('click', () => {
    const fullCardImg = document.querySelector('.popup__full-photo');
    const descriptionCardImg = document.querySelector ('.popup__full-photo-description');
    fullCardImg.setAttribute('src', item.link);
    fullCardImg.setAttribute('alt', item.name);
    descriptionCardImg.textContent = item.name;
    popupImg.classList.add(popup_active);
  })

  return elementPlace;
}

/*открытие попапа создания карточки*/
addPopupBtn.addEventListener ("click", () => {
  addPopup.classList.add(popup_active);
});

/*закрытие попапа создания карточки на иконку и оверлей*/
addPopup.addEventListener("click", (evt) => {
  if(!popupAddContainer.contains(evt.target) || evt.target === popupAddCloseBtn) {
    addPopup.classList.remove(popup_active);
  };
});

/*сохранение данных попапа создания карточки по кнопке 'Создать'*/
popupAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const locInput = document.querySelector('.popup__text_type_loc');
  const linkInput = document.querySelector('.popup__text_type_link');
  const newName = locInput.value;
  const newLink = linkInput.value;
  outputCard({name: newName, link: newLink});
  addPopup.classList.remove(popup_active);
});

/*закрытие попапа фотографии*/
popupImg.addEventListener("click", (event) => {
  if(!popupImgContainer.contains(event.target) || event.target === popupImgCloseBtn) {
      popupImg.classList.remove(popup_active);
  };
});