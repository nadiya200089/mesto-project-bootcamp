import '../style/index.css';
import { profileEditbtnNode, profileAddbtnNode, popupNewPlaceNode, popupProfileNode, popupAvatarNode, avatarEditbtnNode, renderLoading, ButtonState } from './utils.js';
import { openPopup, closePopup } from './modal.js';
import { renderCard } from './card.js';
import { enableValidation } from './validate.js';
import { getAllInfo, createCard, updateAvatarUser, editProfile } from './api';


const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const titleInput = document.querySelector(".form__places-name");
const imageInput = document.querySelector(".form__src");
const formNewPlace = document.querySelector('.form_new-place');
const profileForm = document.querySelector(".form_profile-info");
const avatarForm = document.querySelector('.form_create-avatar');
const nameInput = document.querySelector(".form__user-name");
const aboutInput = document.querySelector(".form__user-description");
const nameNode = document.querySelector(".profile__name");
const aboutNode = document.querySelector(".profile__description");
const avatarInput = document.querySelector(".form__avatar-src");
const profileAvatar = document.querySelector('.profile__avatar');

let myId = null;

profileEditbtnNode.addEventListener('click', (event) => {
    openPopup(popupProfileNode);
});

avatarEditbtnNode.addEventListener('click', (event) => {
    openPopup(popupAvatarNode);

})

profileAddbtnNode.addEventListener('click', (event) => {
    openPopup(popupNewPlaceNode);
});


getAllInfo()
    .then(([user, cards]) => {
        profileName.textContent = user.name;
        profileDescription.textContent = user.about;
        profileAvatar.src = user.avatar;
        profileAvatar.alt = user.name;
        nameInput.value = nameNode.textContent;
        aboutInput.value = aboutNode.textContent;
        myId = user._id;
        for (const cardObj of cards) {
            renderCard(cardObj, 'append', myId);
        };
    })
    .catch((err) => {
        console.log(err);
    });

//   редактирование профиля

profileForm.addEventListener('submit', handleProfileFormSubmit);


//редактирование аватара

avatarForm.addEventListener('submit', handleAvatarFormSubmit);


// Добавление карточки через форму

function handleNewPlaceFormSubmit(evt) {
    evt.preventDefault();
    ButtonState(formNewPlace);
    renderLoading(formNewPlace, true, 'Создать');

    const name = titleInput.value;
    const link = imageInput.value;

    createCard(name, link)
        .then(newCardObj => {
            titleInput.value = newCardObj.name;
            imageInput.value = newCardObj.link;
            renderCard(newCardObj, 'prepend', myId);
            closePopup(popupNewPlaceNode);
            imageInput.value = '';
            titleInput.value = '';
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            renderLoading(formNewPlace, false, 'Создать');
        });
};

formNewPlace.addEventListener('submit', handleNewPlaceFormSubmit);

export function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    ButtonState(avatarForm);
    renderLoading(avatarForm, true, 'Сохранить');

    const avatarUrl = avatarInput.value;

    updateAvatarUser(avatarUrl)
        .then(res => {
            profileAvatar.src = res.avatar;
            closePopup(popupAvatarNode);
            avatarInput.value = '';

        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            renderLoading(avatarForm, false, 'Сохранить');
        }); 
}

export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(profileForm, true, 'Сохранить');

    const name = nameInput.value;
    const about = aboutInput.value;

    editProfile(name, about)
        .then(res => {
            nameNode.textContent = res.name;
            aboutNode.textContent = res.about;
            closePopup(popupProfileNode);
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            renderLoading(profileForm, false, 'Сохранить');
        }); 

}


// валидация форм

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    activeButtonClass: 'form__submit-button_active',
    inputErrorClass: 'form__input_type-error',
    errorClassActive: 'form__input-error_active'
});

