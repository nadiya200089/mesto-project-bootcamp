import '../style/index.css';
import { closePopup, profileEditbtnNode, profileAddbtnNode, popupNewPlaceNode, popupProfileNode, openPopup, popupAvatarNode, avatarEditbtnNode } from './utils.js';
import { elementsContainer, elementTemplate, createCard, renderCard } from './card.js';
import { handleProfileFormSubmit, profileForm, avatarImage, avatarEditButton, avatarForm, handleAvatarFormSubmit } from './modal.js';
import { titleInput, imageInput, formNewPlace, addCard, handleNewPlaceFormSubmit } from './card.js';
import { enableValidation } from './validate.js';
import { Api } from './api';
import { data } from 'autoprefixer';


// открытие и закрытие попапов 

profileEditbtnNode.addEventListener('click', (event) => {
    openPopup(popupProfileNode);
});

avatarEditbtnNode.addEventListener('click', (event) => {
    openPopup(popupAvatarNode);

})

profileAddbtnNode.addEventListener('click', (event) => {
    openPopup(popupNewPlaceNode);
});


// загрузка информации о пользователе с сервера
Api.getUser()
    .then((data) => {
        const profileName = document.querySelector(".profile__name");
        const profileDescription = document.querySelector(".profile__description");
        const profileAvatar = document.querySelector('.profile__avatar');
        profileName.textContent = data.name;
        profileDescription.textContent = data.about;
        profileAvatar.src = data.avatar;
        profileAvatar.alt = data.name;

    })


// загрузка карточек на страницу


Api.getCards().then(cards => {
    for (const cardObj of cards) {
        renderCard(cardObj);
    }  
});




//   редактирование профиля

profileForm.addEventListener('submit', handleProfileFormSubmit);



//редактирование аватара

avatarForm.addEventListener('submit', handleAvatarFormSubmit);




// Добавление карточки через форму

formNewPlace.addEventListener('submit', handleNewPlaceFormSubmit);



// валидация форм

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    activeButtonClass: 'form__submit-button_active',
    inputErrorClass: 'form__input_type-error',
    errorClassActive: 'form__input-error_active',
  });

