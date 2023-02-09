// загрузка карточек на страницу 

import { Api } from './api.js';
import { openPopupCard, closePopup, popupNewPlaceNode, renderLoading } from './utils.js';

export const elementsContainer = document.querySelector('.elements');
export const elementTemplate = document.querySelector('#element-template').content;

export async function createCard(cardObj) {
    const cardElement = elementTemplate.cloneNode(true).querySelector('.element');
    const cardElementImage = cardElement.querySelector('.element__image');
    const cardLikeNode = cardElement.querySelector('.element__like');
    const cardTrashNode = cardElement.querySelector('.element__trash');
    const cardTitleNode = cardElement.querySelector('.element__title');
    const likesNumberNode = cardElement.querySelector('.element__like-number');
    const isMyCard = await isMyCardFn(cardObj);



    cardElementImage.src = cardObj.link;
    cardElementImage.alt = cardObj.name;
    cardTitleNode.textContent = cardObj.name;
    likesNumberNode.textContent = cardObj.likes.length;
    const likesArray = cardObj.likes;
    
    const myUser = await Api.getUser();
    const myUserId = myUser._id; 
    
    let user = likesArray.find(item => item._id == myUserId);
    
    if (likesArray.includes(user)) {
        cardLikeNode.classList.add('element__like_active');
    }



    if (isMyCard === true) {
        cardTrashNode.classList.add('element__trash_active');
    }



    cardTrashNode.addEventListener('click', async () => {
        if (isMyCard === true) {

            Api.deleteCard(cardObj._id).then(res => {
                cardElement.remove();
            });

        }

    })


let likeActive = true;

    cardLikeNode.addEventListener('click', async () => {
        likeActive = !likeActive;
        if (cardLikeNode.classList.contains('element__like_active')) {
            Api.deleteLike(cardObj._id)
                .then(() => {
                    cardLikeNode.classList.remove('element__like_active');
                    const likeIndex = cardObj.likes.indexOf('myUser');
                    if (likeIndex >= 0) {
                        cardObj.likes.splice(likeIndex, 1);
                    }
                    likesNumberNode.textContent = parseInt(likesNumberNode.textContent) - 1;
                });
        }
        else if (!likeActive) {
            Api.putLike(cardObj._id)
                .then(() => {
                    cardLikeNode.classList.add('element__like_active');
                    cardObj.likes.push(myUser);
                    likesNumberNode.textContent = parseInt(likesNumberNode.textContent) + 1;
                });
        }
    });

    cardElementImage.addEventListener('click', () => {
        openPopupCard(cardElementImage, cardTitleNode);
    });

    return cardElement;
}

export async function isMyCardFn(cardObj) {
    const myUser = await Api.getUser();
    const myUserId = myUser._id;

    return cardObj.owner._id === myUserId;
}


export const renderCard = async (cardObj, type = 'append') => {

    const cardNode = await createCard(cardObj);

    if (type === 'append') {
        elementsContainer.append(cardNode);
    } else if (type === 'prepend') {
        elementsContainer.prepend(cardNode);
    }
};


// Добавление карточки через форму

export const titleInput = document.querySelector(".form__places-name");
export const imageInput = document.querySelector(".form__src");
export const formNewPlace = document.querySelector('.form_new-place');

export function handleNewPlaceFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(formNewPlace, true);

    const name = titleInput.value;
    const link = imageInput.value;
    imageInput.value = '';
    titleInput.value = '';

    Api.createCard(name, link)
        .then(newCardObj => {
            titleInput.value = newCardObj.name;
            imageInput.value = newCardObj.link;
            renderCard(newCardObj, 'prepend');
            closePopup(popupNewPlaceNode);
        })
        .finally(() => {
            renderLoading(formNewPlace, false);
        });


    const cardImageCreated = document.querySelectorAll('.element__image');

    cardImageCreated.forEach(photo => {
        photo.addEventListener('click', () => {
            openPopupCard(photo, photo.closest('.element').querySelector('.element__title'))
        });
    });

};
