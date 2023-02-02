import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popup) {
        super(popup);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupSaveBtn = this._popupForm.querySelector('.popup__save-button');
        this._popupSaveBtnTextContent = this._popupSaveBtn.textContent;
    }

    setSubmitAction(action) {
        this._handleSubmit = action
    }
    
    renderLoadingWhileDeleting(isLoading) {
        if(isLoading) {
          this._popupSaveBtn.textContent = 'Сохранение...'
        } else {
          this._popupSaveBtn.textContent = this._popupSaveBtnTextContent
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        })
    }
}