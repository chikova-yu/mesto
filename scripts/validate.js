//показывает ошибку
const showError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

//убирает ошибку
const hideError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

//проверяет валидацию
const checkInputValidity = (formElement, inputElement, config) => {
    if(!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage, config);
    } else
      hideError(formElement, inputElement, config);
};

const setIventListeners = (formElement, {inputSelector, submitBtnSelector, ...config}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const btnElement = formElement.querySelector(submitBtnSelector);
    toggleBtnState(inputList, btnElement, config);
    inputList.forEach(function (inputElement) {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, config);
        toggleBtnState(inputList, btnElement, config);
      });
    });
};

const enableValidation = ({formSelector, ...config}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(function (formElement) {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(document.querySelectorAll(formSelector));
      fieldsetList.forEach(function (fieldset) {
        setIventListeners(fieldset, config);
      });
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitBtnSelector: '.popup__save-button',
    inactiveBtnClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__error_visible'
});