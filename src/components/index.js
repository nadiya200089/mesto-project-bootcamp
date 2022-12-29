import '../style/index.css';

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


// открытие и закрытие попапов 

import {closePopup, profileEditbtnNode, profileAddbtnNode, popupNewPlaceNode, popupProfileNode, openPopup} from './utils.js'

profileEditbtnNode.addEventListener('click', (event) => {
    openPopup(popupProfileNode);
});

profileAddbtnNode.addEventListener('click', (event) => {
    openPopup(popupNewPlaceNode);
});



// загрузка карточек на страницу через template

import { elementsContainer, elementTemplate, createCard } from './card.js';


initialCards.forEach(function (element) {
    const cardElement = createCard(element)
    elementsContainer.append(cardElement);
});



//   редактирование профиля

import {handleProfileFormSubmit, profileForm} from './modal.js'

profileForm.addEventListener('submit', handleProfileFormSubmit);



// Добавление карточки через форму

import {titleInput, imageInput, formNewPlace, addCard, handleNewPlaceFormSubmit} from './card.js'

formNewPlace.addEventListener('submit', handleNewPlaceFormSubmit);



// валидация форм

import {showInputError, hideInputError, checkInputValidity, setEventListeners, enableValidation, hasInvalidInput, toggleButtonState} from './validate.js'

enableValidation();

