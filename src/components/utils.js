// открытие и закрытие попапов
import { closePopup } from "./modal.js";
export const profileEditbtnNode = document.querySelector('.profile__edit-button');
export const profileAddbtnNode = document.querySelector('.profile__add-button');
export const avatarEditbtnNode = document.querySelector('.profile__edit-button-avatar');
export const popupAvatarNode = document.querySelector('.popup_avatar');
export const popupNewPlaceNode = document.querySelector('.popup_new-place');
export const popupProfileNode = document.querySelector('.popup_profile');
export const popupElementNode = document.querySelector('.popup_element');
export const popupPhoto = popupElementNode.querySelector('.popup__photo');
export const formList = Array.from(document.querySelectorAll('#opened-popup'));

export function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
export function handleClosePopupOverlay(evt) {
    const target = evt.target;
    const openedPopup = document.querySelector('.popup_opened');
    if (target.classList.contains('popup__container') || target.classList.contains('popup__close-btn')) {
        closePopup(openedPopup);
    }
}

export function openPopupCard(cardImageNode, cardTitleNode) {
    openPopup(popupElementNode);
    popupPhoto.src = cardImageNode.src;
    popupPhoto.alt = cardTitleNode.textContent;
    popupElementNode.querySelector('.popup__title').textContent = cardTitleNode.textContent;
};

export function renderLoading(form, isLoading, text) {

    const submitButtonNode = form.querySelector('.form__submit-button');
    
    if (isLoading) {
        submitButtonNode.textContent = 'Сохранение...';
    } else {
        submitButtonNode.textContent = text;
    }

}

export function ButtonState(form) {
  const buttonElement =form.querySelector('.form__submit-button');
        buttonElement.classList.remove('form__submit-button_active');
        buttonElement.setAttribute('disabled', true);
}