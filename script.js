// const elementLike  = document.querySelector('.element__like');
// elementLike.addEventListener('click', function (evt) {
 
//     evt.target.classList.toggle('element__like_active');
   
// });

function likeClickHandler(event) {
    event.target.classList.toggle('element__like_active');
}

const elementLikeNodes = document.querySelectorAll('.element__like');
const profileEditbtnNode = document.querySelector('.profile__edit-button');
const popupProfileNode = document.querySelector('.popup_profile');
const popupCloseIcon = document.querySelector('.form__close-icon');

// for (const elementLikeNode of elementLikeNodes) {
//     elementLikeNode.addEventListener('click', likeClickHandler);
// }

profileEditbtnNode.addEventListener('click', (event) => {
    popupProfileNode.classList.add('popup_active');
});

popupCloseIcon.addEventListener('click', (event) => {
    popupProfileNode.classList.remove('popup_active');
});



