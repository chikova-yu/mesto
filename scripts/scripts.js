const popup_active = "popup_active";

const popup = document.querySelector(".popup");
const openPopupBtn = document.querySelector(".profile__edin-button");
const popupContainer = popup.querySelector(".popup__container");
const popupCloseBtn = popup.querySelector(".popup__close-button");
const popupForm = popup.querySelector(".popup__form");
const nameInput = popup.querySelector(".popup__text_name");
const descriptionInput = popup.querySelector(".popup__text_description");

openPopupBtn.addEventListener("click", function() {
    popup.classList.add(popup_active);
});

popup.addEventListener("click", function(event){
    if(!popupContainer.contains(event.target) || event.target === popupCloseBtn) {
        popup.classList.remove(popup_active);
    }
});

popupForm.addEventListener("submit", function(event){
    event.preventDefault();
    
})