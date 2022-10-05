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
const popupSaveBtn = popup.querySelector(".popup__save-button");

openPopupBtn.addEventListener("click", function(){
    popup.classList.add(popup_active);
});

popup.addEventListener("click", function(event){
    if(!popupContainer.contains(event.target) || event.target === popupCloseBtn) {
        popup.classList.remove(popup_active);
    }
});

popupForm.addEventListener("submit", function(event){
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    descriptionProfile.textContent = descriptionInput.value;
    popup.classList.remove(popup_active);
})
