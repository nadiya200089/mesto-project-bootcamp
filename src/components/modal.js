//   редактирование профиля
import { Api } from './api.js';
import { closePopup, popupAvatarNode, popupProfileNode, renderLoading } from './utils.js'
export const profileForm = document.querySelector(".form_profile-info");
export const avatarForm = document.querySelector('.form_create-avatar');


export function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(avatarForm, true);

    const avatarInput = document.querySelector(".form__avatar-src");
    const profileAvatar = document.querySelector('.profile__avatar');

    const avatarUrl = avatarInput.value;
    //profileAvatar.src = avatarUrl;

    Api.updateAvatarUser(avatarUrl)
        .then(res => {
            profileAvatar.src = res.avatar;
            closePopup(popupAvatarNode);
        })
        .finally(() => {
            renderLoading(avatarForm, false);
        }); 
}

export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(profileForm, true);

    const nameInput = document.querySelector(".form__user-name");
    const aboutInput = document.querySelector(".form__user-description");
    const nameNode = document.querySelector(".profile__name");
    const aboutNode = document.querySelector(".profile__description");

    const name = nameInput.value;
    const about = aboutInput.value;

    Api.editProfile(name, about)
        .then(res => {
            nameNode.textContent = res.name;
            aboutNode.textContent = res.about;
            closePopup(popupProfileNode);
        })
        .finally(() => {
            renderLoading(profileForm, false);
        }); 

}

