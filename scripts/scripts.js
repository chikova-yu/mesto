const popup_active = "popup_active";

const popup = document.querySelector(".popup");
const openPopupBtn = document.querySelector(".profile__edin-button");
const popupContainer = popup.querySelector(".popup__container");
const popupCloseBtn = popup.querySelector(".popup__close-button");
const popupForm = popup.querySelector(".popup__form");
const nameProfile = document.querySelector(".profile__name");
const nameInput = popup.querySelector(".popup__text_name");
const descriptionProfile = document.querySelector(".profile__description");
const descriptionInput = popup.querySelector(".popup__text_description");

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