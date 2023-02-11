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
  openEditPopupBtn, 
  nameInput,
  descriptionInput,
  cardsContainer,
  addPopupBtn,
  editAvatarBtn
} 
from "../utils/constants.js";

let userId = null;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: 'a88d88e2-8099-4329-b331-cfa0f8f3f7b5',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getInfoProfile(), api.getInitialCards()])
  .then(([user, сards]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    cardList.renderItems(сards);
  })
  .catch((err) => console.log(err)); 

/*создание карточки*/
const createCard = (data) => {
  const card = new Card(data, '#tempalate-card', userId, {
    handleCardClick: () => {
      popupFigure.open(data)
    },

    handleLikeCard: () => {
      api.likeCard(data)
        .then((res) => card.likeCard(res))
        .catch((err) => console.log(err));
    },

    handleDislikeCard: (data) => {
      api.dislikeCard(data)
        .then((res) => card.dislikeCard(res))
        .catch((err) => console.log(err));
    },

    handleDeleteCard: (data) => {
      popupFormDeleteCard.open();
      popupFormDeleteCard.setSubmitAction(() => {
        api.deleteCard(data)
          .then(() => {
            card.removeCard();
            popupFormDeleteCard.close();
          })
          .catch((err) => console.log(err));
      });
    }
  }
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const popupFormDeleteCard = new PopupWithConfirm(".popup_type_delete-approve");
popupFormDeleteCard.setEventListeners();

//отрисовка элементов
const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card)
  }}, cardsContainer
);

//добавление карточки
const popupFormAddCard = new PopupWithForm(".popup_type_add", {
  handleSubmit: (data) => {
    popupFormAddCard.renderLoading(true, "Создать");
    api.addCard(data)
      .then((res) => {
        const card = createCard(res);
        cardList.addItem(card);
        popupFormAddCard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupFormAddCard.renderLoading(false, "Создать");
      });
  },
});
popupFormAddCard.setEventListeners();

//открытие фотографии с описанием
const popupFigure = new PopupWithImage(".popup_type_img");
popupFigure.setEventListeners();

//редактирование профиля
const userInfo = new UserInfo({name: '.profile__name', info: '.profile__description', avatar: '.profile__avatar'})

const popupFormEditAvatar = new PopupWithForm(".popup_type_avatar", {
  handleSubmit: (item) => {
    popupFormEditAvatar.renderLoading(true);
    api.editAvatar(item)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupFormEditAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupFormEditAvatar.renderLoading(false);
      });
  }}
);
popupFormEditAvatar.setEventListeners()

const popupFormEditProfile = new PopupWithForm(".popup_type_edit", {
  handleSubmit: (item) => {
    popupFormEditProfile.renderLoading(true);
    api.editProfile(item)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupFormEditProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupFormEditProfile.renderLoading(false);
      });
  }}
);
popupFormEditProfile.setEventListeners();

//слушатели на кнопки
editAvatarBtn.addEventListener('click', () => {
  popupFormEditAvatar.open()
})

addPopupBtn.addEventListener('click', () => {
  popupFormAddCard.open();
});

openEditPopupBtn.addEventListener('click', () => {
  popupFormEditProfile.open();
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  descriptionInput.value = user.info;
});

//валидация форм
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const formValidate = new FormValidator(config, formElement);
    formValidate.enableValidation();
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitBtnSelector: '.popup__save-button',
  disabledBtnClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_visible',
});