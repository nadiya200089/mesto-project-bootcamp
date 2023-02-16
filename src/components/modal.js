//   редактирование профиля

export const popupList = Array.from(document.querySelectorAll('.popup'));

export function openPopup(popupNode) {
    popupNode.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}
export function closePopup(popupNode) {
    popupNode.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc)
}

popupList.forEach(popup => {
    popup.addEventListener('mousedown', handleClosePopupOverlay)
});

 function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
 function handleClosePopupOverlay(evt) {
    const target = evt.target;
    const openedPopup = document.querySelector('.popup_opened');
    if (target.classList.contains('popup__container') || target.classList.contains('popup__close-btn')) {
        closePopup(openedPopup);
    }
}

