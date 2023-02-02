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

Promise.all([api.getInfoProfile(), api.getInitialCards()])
  .then(([item, initialCards]) => {
    userId = item._id;
    user.setUserInfo(item);
    user.setUserAvatar(item);
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

/*создание карточки*/
const createCard = (item) => {
  const card = new Card(item,
    {
      name: item.name, 
      link: item.link, 
      likes: item.likes,
      id: item._id, 
      userId, 
      creatorId: item.owner._id
    }, 
    {
      handleCardClick: () => {
      popupFigure.open(item)
    }},
    '#tempalate-card', 

    async () => {
      popupWithConfirm.open(() => {
        api.deleteCard(card._id).then(res => {
          card.removeCard(res);
          popupWithConfirm.close();
        })
        .catch((err) => {
          console.log(err);
        });   
      })
    },

    async (card, isLiked) => {
      try {
        const res = isLiked
        ? await api.likeCard(card._id)
        : await api.dislikeCard(card._id)

        card.likeCard(res)
      } catch(err) {
        console.log(err);
      }
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
};

//сохранение формы
const confirmDeletePopup = new PopupWithConfirm('.popup_type_delete')
confirmDeletePopup.setEventListeners();

//отрисовка элементов
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card)
  }}, cardsContainer
);
cardList.renderItems(initialCards);

//добавление карточки
const popupFormAddCard = new PopupWithForm(".popup_type_add", 
  async ({place, link}) => {
    try {
      await api.addCard({place, link}).then(item => {
        const card = createCard(item);
        cardList.addItem(card);
        popupFormAddCard.close();
      })
    } catch(err) {
      console.log(err); 
    }
  }
);
popupFormAddCard.setEventListeners();

//редактирование профиля
const userInfo = new UserInfo({
  name: '.profile__name', 
  info: '.profile__description',
  avatar: '.profile__avatar'
})

const popupFormEditCard = new PopupWithForm(".popup_type_edit",
  async ({name, info}) => {
    try{
      await api.setUserInfo({name, info}).then(item => {
        userInfo.setUserInfo(item);
        popupFormEditCard.close();
      })
    } catch(err) {
      console.log(err);
    }
  } 
);
popupFormEditCard.setEventListeners();

//редактирование аватара
const popupFormAvatar = new PopupWithForm('.popup_type_avatar', 
  async ({avatar}) => {
  try {
    await api.editAvatar({avatar}).then(item => {
      userInfo.setUserAvatar(item);
      popupFormAvatar.close();
    })
  } catch(err) {
    console.log(err);
  }
});
avatarForm.setEventListeners();

//открытие фотографии с описанием
const popupFigure = new PopupWithImage(".popup_type_img");
popupFigure.setEventListeners();

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