// валидация форм

export const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type-error');
    inputElement.classList.remove('form__input');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

export const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type-error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

export const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

export const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);

        });
    });
};

export function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement);
    });

}


export function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

export function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.remove('form__submit-button_active');
        buttonElement.style.pointerEvents = 'none';

    } else {
        buttonElement.classList.add('form__submit-button_active');
        buttonElement.style.pointerEvents = 'auto';
    }

}