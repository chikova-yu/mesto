//показывает ошибку
const showInputError = (config, errorElement, inputElement) => {
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.errorClass);
};

//убирает ошибку
const hideInputError = (config, errorElement, inputElement) => {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass);
};

//проверяет валидацию
const toggleInputErrorState = (config, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.input-error-${inputElement.name}`);
    if(inputElement.validity.valid) {
        hideInputError(config, errorElement, inputElement);
    } else {
        showInputError(config, errorElement, inputElement, inputElement.validationMessage);
    };
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

//кнопка неактивна
const disabledBtn = (config, btnElement) => {
    btnElement.classList.add(config.disabledBtnClass);
    btnElement.disabled = true;
};

//кнопка активна
const enableBtn = (config, btnElement) => {
    btnElement.classList.remove(config.disabledBtnClass);
    btnElement.disabled = false;
}

//переключатель кнопки
const toggleBtnState = (config, inputList, btnElement) => {
    if (hasInvalidInput(inputList)) {
        disabledBtn(config, btnElement);
    } else {
        enableBtn(config, btnElement);
    };
};

//обработчик полей формы
const setEventListeners = (config, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const btnElement = formElement.querySelector(config.submitBtnSelector);
    
    toggleBtnState(config, inputList, btnElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        toggleInputErrorState(config, formElement, inputElement);
        toggleBtnState(config, inputList, btnElement);
      });
    });
};

//обработчик форм
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    
    formList.forEach((formElement) => {
        setEventListeners(config, formElement);
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