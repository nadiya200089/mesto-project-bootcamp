//   редактирование профиля
import {closePopup, popupProfileNode} from './utils.js'
export const profileForm = document.querySelector(".form_profile-info");

export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const nameInput = document.querySelector(".form__user-name");
    const jobInput = document.querySelector(".form__user-description");
    const profileName = document.querySelector(".profile__name");
    const profileDescription = document.querySelector(".profile__description");    
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    // jobInput.value = '';
    // nameInput.value = '';
    closePopup(popupProfileNode);
}