

// загрузка карточек на страницу через template

import {openPopupCard, popupElementNode, popupPhoto, openPopup, popupList, formList, } from './utils.js';
export const elementsContainer = document.querySelector('.elements');
export const elementTemplate = document.querySelector('#element-template').content;

export function createCard(element) {
    const cardElement = elementTemplate.cloneNode(true);
    const cardElementImage = cardElement.querySelector('.element__image');
    cardElementImage.src = element.link;
    cardElementImage.alt = element.name;
    cardElement.querySelector('.element__title').textContent = element.name;

    cardElement.querySelector('.element__trash-img').addEventListener('click', function (evt) {
        evt.target.closest('.element').remove();
    })

    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    const cardImage = document.querySelectorAll('.element__image');

    cardImage.forEach(photo => {
        photo.addEventListener('click', () => {
            openPopupCard(photo, photo.closest('.element').querySelector('.element__title'))
        });
    });

    return cardElement;
}



// // Добавление карточки через форму

export const titleInput = document.querySelector(".form__places-name");
export const imageInput = document.querySelector(".form__src");
export const formNewPlace = document.querySelector('.form_new-place');

export function addCard(imageSrc, titleValue) {
    const newCard = elementTemplate.cloneNode(true);
    newCard.querySelector('.element__image').src = imageSrc;
    newCard.querySelector('.element__image').alt = titleValue;
    newCard.querySelector('.element__title').textContent = titleValue;

    newCard.querySelector('.element__trash-img').addEventListener('click', function (evt) {
        evt.target.closest('.element').remove();
    })

    newCard.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });
    return newCard;
};


import {closePopup, popupNewPlaceNode} from './utils.js'
export function handleNewPlaceFormSubmit(evt) {
    evt.preventDefault();
    const newCard = addCard(imageInput.value, titleInput.value);
    imageInput.value = '';
    titleInput.value = '';
    closePopup(popupNewPlaceNode);
    elementsContainer.prepend(newCard);

    const cardImageCreated = document.querySelectorAll('.element__image');

    cardImageCreated.forEach(photo => {
        photo.addEventListener('click', () => {
            openPopupCard(photo, photo.closest('.element').querySelector('.element__title'))
        });
    });

};
