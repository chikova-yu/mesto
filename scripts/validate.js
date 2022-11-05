//показывает ошибку
const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

//убирает ошибку
const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
};

//проверяет валидацию
const checkInputValidity = (formElement, inputElement, config) => {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideInputError(formElement, inputElement, config);
    };
};

//кнопка активна/неактивна
const toggleBtnState = (inputList, btnElement, {disabledBtnClass}) => {
    if (hasInvalidInput(inputList)) {
        btnElement.classList.add(disabledBtnClass);
        btnElement.disabled = true;
    } else {
        btnElement.classList.remove(disabledBtnClass);
        btnElement.disabled = false;
    };
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
};

//обработчик полей формы
const setEventListeners = (formElement, {inputSelector, submitBtnSelector, ...config}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const btnElement = formElement.querySelector(submitBtnSelector);

    toggleBtnState(inputList, btnElement, config);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, config);
        toggleBtnState(inputList, btnElement, config);
      });
    });
};

//обработчик форм
const enableValidation = ({formSelector}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitBtnSelector: '.popup__save-button',
    disabledBtnClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_visible'
});