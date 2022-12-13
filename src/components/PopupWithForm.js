import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popup, { formSubmitCallback }){
        super(popup);
        this._formSubmitCallback = formSubmitCallback;

        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__text'));
    }

    _getInputValues(){
        this._newValues = {};
        this._inputList.forEach((inputElement) => {
          this._newValues[inputElement.name] = inputElement.value;
        });
        return this._newValues;
    }

    close(){
        super.close();
        this._popupForm.reset()
    }

    setEventListeners(){
        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();
            this._formSubmitCallback(this._getInputValues());
        });
        super.setEventListeners();
    }
}