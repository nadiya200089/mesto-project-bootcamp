// загрузка карточек на страницу 

import { deleteCard, updateLike } from './api.js';
import { openPopupCard } from './utils.js';
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;


export function createCard(cardObj, myId) {
    const cardElement = elementTemplate.cloneNode(true).querySelector('.element');
    const cardElementImage = cardElement.querySelector('.element__image');
    const cardLikeNode = cardElement.querySelector('.element__like');
    const cardTrashNode = cardElement.querySelector('.element__trash');
    const cardTitleNode = cardElement.querySelector('.element__title');
    const likesNumberNode = cardElement.querySelector('.element__like-number');

    cardElementImage.src = cardObj.link;
    cardElementImage.alt = cardObj.name;
    cardTitleNode.textContent = cardObj.name;
   

    if (cardObj.owner._id === myId) {
        cardTrashNode.classList.add('element__trash_active');
    }


    cardTrashNode.addEventListener('click', () => {
        if (cardObj.owner._id === myId) {
            deleteCard(cardObj._id)
                .then(res => {
                    cardElement.remove();
                })
                .catch((err) => {
                    console.log(err); 
                  }); 
        }
    })


    function isLiked(likes, myId) {
        return likes.some(user => user._id === myId);
    }


    function updateLikeView(likes, myId) {
        if (isLiked(likes, myId)) {
            cardLikeNode.classList.add('element__like_active');
            likesNumberNode.textContent = likes.length;
        } else {
            cardLikeNode.classList.remove('element__like_active');
            likesNumberNode.textContent = likes.length;
        }
    }
    updateLikeView(cardObj.likes, myId);
    function handleClickLike() {
        updateLike(cardObj._id, isLiked(cardObj.likes, myId))
            .then(updateDataCard => {
                cardObj.likes = updateDataCard.likes;
                updateLikeView(cardObj.likes, myId)
            })
            .catch((err) => {
                console.log(err); 
            }); 
    }
    cardLikeNode.addEventListener('click', handleClickLike);

    cardElementImage.addEventListener('click', () => {
        openPopupCard(cardElementImage, cardTitleNode);
    });

    return cardElement;
}


export function renderCard(cardObj, type = 'append', myId) {

    const cardNode = createCard(cardObj, myId);

    if (type === 'append') {
        elementsContainer.append(cardNode);
    } else if (type === 'prepend') {
        elementsContainer.prepend(cardNode);
    }
};
