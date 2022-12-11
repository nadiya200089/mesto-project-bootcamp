const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



// загрузка карточек на страницу через template

const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

initialCards.forEach(function (element) {
    const cardElement = elementTemplate.cloneNode(true);

    cardElement.querySelector('.element__image').src = element.link;
    cardElement.querySelector('.element__image').alt = element.name;
    cardElement.querySelector('.element__title').textContent = element.name;

    elementsContainer.append(cardElement);

});



// открытие и закрытие попапов редактирования профиля и добаввления карточки
const profileEditbtnNode = document.querySelector('.profile__edit-button');
const profileAddbtnNode = document.querySelector('.profile__add-button');
const popupNewPlaceNode = document.querySelector('.popup_new-place');
const popupProfileNode = document.querySelector('.popup_profile');
function openPopup(popupNode) {
    const popupCloseNode = popupNode.querySelector('.popup__close');

    popupCloseNode.addEventListener('click', () => {
        closePopup(popupNode);
    }, { once: true });

    popupNode.classList.add('popup_opened');
}

function closePopup(popupNode) {
    popupNode.classList.remove('popup_opened');
}

profileEditbtnNode.addEventListener('click', (event) => {
    openPopup(popupProfileNode);
});


profileAddbtnNode.addEventListener('click', (event) => {
    openPopup(popupNewPlaceNode);
});



//   редактирование профиля
const formElement = document.querySelector(".form_profile-info");
const nameInput = document.querySelector(".form__user-name");
const jobInput = document.querySelector(".form__user-description");

function formSubmitHandler(evt) {
    evt.preventDefault();

    document.querySelector(".profile__name").textContent = nameInput.value;
    document.querySelector(".profile__description").textContent = jobInput.value;
    jobInput.value = '';
    nameInput.value = '';
}
formElement.addEventListener('submit', formSubmitHandler);

const buttonSubmit = formElement.querySelector('.form__submit-button');
buttonSubmit.addEventListener('click', (event) => {
    closePopup(popupProfileNode);

});



// Добавление карточки через форму
const titleInput = document.querySelector(".form__places-name");
const imageInput = document.querySelector(".form__src");
const btnSubmit = document.querySelector('.button-create-cards');

function addCard(imageSrc, titleValue) {
    const newCard = elementTemplate.cloneNode(true);
    newCard.querySelector('.element__image').src = imageSrc;
    newCard.querySelector('.element__image').alt = titleValue;
    newCard.querySelector('.element__title').textContent = titleValue;
    elementsContainer.prepend(newCard);

};

btnSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();
    addCard(imageInput.value, titleInput.value);
    imageInput.value = '';
    titleInput.value = '';
    closePopup(popupNewPlaceNode);

    const cardImageCreated = document.querySelectorAll('.element__image');

    cardImageCreated.forEach(photo => {
        photo.addEventListener('click', () => {
            openPopupCard(photo, photo.closest('.element').querySelector('.element__title'))
        });
    });

});





// работа с карточками (лайки, корзина, открытие попапа с картинкой)

elementsContainer.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('element__like')) {
        evt.target.classList.toggle('element__like_active');

    }
    if (evt.target.classList.contains('element__trash-img')) {
        evt.target.closest('.element').remove();
    }


});

const cardImage = document.querySelectorAll('.element__image');

    function openPopupCard(imageSrc, titleValue) {

        const popupElement = document.querySelector('.popup_element');
        popupElement.classList.add('popup_opened');
        popupElement.querySelector('.popup__photo').src = imageSrc.src;
        popupElement.querySelector('.popup__title').textContent = titleValue.textContent;
        const closePopupElement = popupElement.querySelector('.popup__close');
        closePopupElement.addEventListener('click', () => {
            popupElement.classList.remove('popup_opened');
        });
    };


  
cardImage.forEach(photo => {
    photo.addEventListener('click', () => {
        openPopupCard(photo, photo.closest('.element').querySelector('.element__title'))
    });
});




