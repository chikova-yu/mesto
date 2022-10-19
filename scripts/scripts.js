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

/*сохранение данных попапа редактирования по иконке*/
popupEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  editPopup.classList.remove(popup_active);
});

/*появление шести карточек из коробки на странице*/
function openWindow() {
  initialCards.forEach(outputCard);
  function outputCard({name, link}) {
    const elementPlace = elementTemplate.querySelector(".elements__card").cloneNode(true);
    elementPlace.querySelector(".elements__text").textContent = name;
    elementPlace.querySelector(".elements__image").src = link;
    elementCard.prepend(elementPlace);
  }
}
openWindow();

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

const popupAddForm = document.querySelector('#form-add');
const locInput = document.querySelector('.popup__text_type_loc');
const linkInput = document.querySelector('.popup__text_type_link');

/*сохранение данных попапа создания карточки по иконке*/
popupAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newName = locInput.value;
  const newLink = linkInput.value;
  outputCard({
    name: newName,
    link: newLink,
  })
  addPopup.classList.remove(popup_active);
});