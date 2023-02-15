// валидация форм

export const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClassActive}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClassActive);
};

export const hideInputError = (formElement, inputElement, {inputErrorClass, errorClassActive}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClassActive);
    errorElement.textContent = '';
};

export const checkInputValidity = (formElement, inputElement, { inputErrorClass, errorClassActive}) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, { inputErrorClass, errorClassActive});
    } else {
        hideInputError(formElement, inputElement, {inputErrorClass, errorClassActive});
    }
};

export const setEventListeners = (formElement, {inputSelector, inputErrorClass, activeButtonClass, errorClassActive, submitButtonSelector}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, {activeButtonClass});
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            toggleButtonState(inputList, buttonElement, {activeButtonClass});
            checkInputValidity(formElement, inputElement, { inputErrorClass, errorClassActive});

        });
    });

};

export function enableValidation({formSelector, inputSelector, submitButtonSelector, activeButtonClass, inputErrorClass, errorClassActive}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, {inputSelector, inputErrorClass, activeButtonClass, errorClassActive, submitButtonSelector});
    });

}


export function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

export function toggleButtonState(inputList, buttonElement, {activeButtonClass}) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.remove(activeButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.add(activeButtonClass);
        buttonElement.removeAttribute('disabled', true);
    }

}