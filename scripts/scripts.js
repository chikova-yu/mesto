const popup_active = "popup_active";

const popup = document.querySelector(".popup");
const openPopupBtn = document.querySelector(".profile__edin-button");
const popupContainer = popup.querySelector(".popup__container");
const popupCloseBtn = popup.querySelector(".popup__close-button");
const popupForm = popup.querySelector(".popup__form");
const nameProfile = document.querySelector(".profile__name");
const nameInput = popup.querySelector(".popup__text_type_name");
const descriptionProfile = document.querySelector(".profile__description");
const descriptionInput = popup.querySelector(".popup__text_type_description");

/*открытие попапа*/
function open(){
    popup.classList.add(popup_active);
    nameInput.value = nameProfile.textContent;
    descriptionInput.value = descriptionProfile.textContent;
}
openPopupBtn.addEventListener("click", open);

/*закрытие попапа на иконку и оверлей*/
function close(event){
    if(!popupContainer.contains(event.target) || event.target === popupCloseBtn) {
        popup.classList.remove(popup_active);
    };
}
popup.addEventListener("click", close);

/*сохранение данных по иконке*/
function submit(event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    descriptionProfile.textContent = descriptionInput.value;
    popup.classList.remove(popup_active);
}
popupForm.addEventListener("submit", submit);

const elementsContainer = document.querySelector('.elements');
const cardAddForm = modalAddForm.querySelector('.popup__form');
const cardTemplate = document.querySelector('#template-card');

function createElement (data) {
    const cardElement = cardTemplate.content.cloneNode(true);
  
    const cardText = cardElement.querySelector('.elements__text');
    cardText.textContent = data.name;
    
    const cardImage = cardElement.querySelector('.elements__image');
    cardImage.alt = data.name;
    cardImage.src = data.link;
  
    const removeButton = cardElement.querySelector('.elements__remove-button');
    removeButton.addEventListener('click', deleteCardHandler);
  
    const likeButton = cardElement.querySelector('.elements__like-button');
    likeButton.addEventListener('click',likeCardHandler);
    
    cardImage.addEventListener('click', () => {
      openPopupWithImage(data);
    });
  
    modalFigurePopupCloseButton.addEventListener('click', () => closeModalWindow(modalFigurePopup));
    
    return cardElement;  
  };

  function openPopupWithImage (data) {
    const popupCaption = document.querySelector('.popup__caption');
    popupCaption.textContent = data.name;
  
    const popupImage = document.querySelector('.popup__image');
    popupImage.src = data.link;
    popupImage.alt = data.name;
  
    openModalWindow(modalFigurePopup);
  }
  
  function deleteCardHandler (evt) {
    evt.target.closest('.elements__card').remove();
  }