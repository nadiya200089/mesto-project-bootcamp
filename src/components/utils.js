// открытие и закрытие попапов 

export const profileEditbtnNode = document.querySelector('.profile__edit-button');
export const profileAddbtnNode = document.querySelector('.profile__add-button');
export const popupNewPlaceNode = document.querySelector('.popup_new-place');
export const popupProfileNode = document.querySelector('.popup_profile');
export const popupElementNode = document.querySelector('.popup_element');
export const popupPhoto = popupElementNode.querySelector('.popup__photo');
export const popupList = Array.from(document.querySelectorAll('.popup'));
export const formList = Array.from(document.querySelectorAll('#opened-popup'));

export function openPopup(popupNode) {
    const popupCloseNode = popupNode.querySelector('.popup__close');

    popupCloseNode.addEventListener('click', () => {
        closePopup(popupNode);
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
            closePopup(popupNode);
        }
    });

    popupList.forEach((popup) => {
        formList.forEach((form) => {
            form.addEventListener('click', (evt) => {
                evt.stopPropagation();
            });
        });
        popup.addEventListener('click', (evt) => {
            closePopup(popupNode);
        });
    });


    popupNode.classList.add('popup_opened');
}

export function closePopup(popupNode) {
    popupNode.classList.remove('popup_opened');
}



export function openPopupCard(imageSrc, titleValue) {
    openPopup(popupElementNode);
    popupPhoto.src = imageSrc.src;
    popupPhoto.alt = titleValue.textContent;
    popupElementNode.querySelector('.popup__title').textContent = titleValue.textContent;
};