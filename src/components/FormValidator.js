export const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitBtnSelector: '.popup__save-button',
    disabledBtnClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_visible',
};

export class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;

        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitBtnSelector = config.submitBtnSelector;
        this._disabledBtnClass = config.disabledBtnClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;     

        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._btnElement = this._formElement.querySelector(this._submitBtnSelector);
    };

    //показывает ошибку
    _showInputError(inputElement) {
        this._errorElement = this._formElement.querySelector(`.input-error-${inputElement.name}`);
        inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = inputElement.validationMessage;
        this._errorElement.classList.add(this._errorClass);
    };

    //убирает ошибку
    _hideInputError(inputElement) {
        this._errorElement = this._formElement.querySelector(`.input-error-${inputElement.name}`);
        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.textContent = '';
        this._errorElement.classList.remove(this._errorClass);
    };

    //проверяет валидацию
    _toggleInputErrorState(inputElement) {
        if(inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement, inputElement.validationMessage);
        };
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        });
    };

    //кнопка неактивна
    disabledBtn () {
        this._btnElement.classList.add(this._disabledBtnClass);
        this._btnElement.disabled = true;
    };

    //кнопка активна
    enableBtn () {
        this._btnElement.classList.remove(this._disabledBtnClass);
        this._btnElement.disabled = false;
    };

    //переключатель кнопки
    _toggleBtnState () {
        if (this._hasInvalidInput(this._inputList)) {
            this.disabledBtn();
        } else {
            this.enableBtn();
        };
    };

    //обработчик полей формы
    _setEventListeners () {        
        this._toggleBtnState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._toggleInputErrorState(inputElement);
                this._toggleBtnState();
            });
        });
    };

    resetValidation() {
        this._toggleBtnState();
  
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }

    //обработчик форм
    enableValidation () {
        this._setEventListeners();
    };

}