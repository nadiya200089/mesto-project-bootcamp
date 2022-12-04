const profileEditbtnNode = document.querySelector('.profile__edit-button');
const profileAddbtnNode = document.querySelector('.profile__add-button');
const elementNodes = document.querySelectorAll('.element');
const popupNewPlaceNode = document.querySelector('.popup_new-place');
const popupProfileNode = document.querySelector('.popup_profile');
const popupElementNode = document.querySelector('.popup_element');
const elementsContainer = document.querySelector('.elements');


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



// открытие и закрытие попапов редактирования профиля и добаввления карточки

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


const formElement = document.querySelector(".form_profile-info");
const nameInput = document.querySelector(".form__user-name");
const jobInput = document.querySelector(".form__user-description");

const titleInput = document.querySelector(".form__places-name");
const imageInput = document.querySelector(".form__src");


function formSubmitHandler(evt) {
  evt.preventDefault();

  document.querySelector(".profile__name").textContent = nameInput.value;
  document.querySelector(".profile__description").textContent = jobInput.value;
  // document.querySelector(".element__title").textContent = titleInput.value;
  // document.querySelector(".element__image").textContent = imageInput.src;
  // const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  // elementsContainer.appeand(cardElement);
}
formElement.addEventListener('submit', formSubmitHandler);





const buttonSubmit = document.querySelector('.create-cards');
const profile = document.querySelector('.profile');
function addCard(imageValue, titleValue) {
  const elementsTemplate = document.querySelector('.elements').textContent;
  const Element = elementsTemplate.querySelector('.element').cloneNode(true);
  Element.querySelector('.element__image').textContent = imageSrc;
  Element.querySelector('.element__title').textContent = titleValue;
  profile.append(elementsTemplate);
}



function cardSubmitHandler(image, cardTitle) {

  let titleInputValue = titleInput.value;
  let card = document.createElement('div');
  card.classList.add("element");
  elementsContainer.append(card);
  let buttonTrash = document.createElement('button');
  buttonTrash.setAttribute('type', 'button');
  buttonTrash.classList.add("btn", "element__trash");
  card.append(buttonTrash);
  let trashImg = document.createElement("img");
  trashImg.setAttribute('src', "./images/Trash.svg");
  trashImg.classList.add('element__trash-img');
  buttonTrash.append(trashImg);
  let cardImage = document.createElement('img');
  cardImage.classList.add('img', 'element__image');
  cardImage.setAttribute('src', image);
  card.append(cardImage);
  let description = document.createElement('div');
  description.classList.add('element__description');
  card.append(description);
  let descriptionTitle = document.createElement('h2');
  descriptionTitle.classList.add('element__title');
  descriptionTitle.textContent = cardTitle;
  description.append(descriptionTitle);
  let likeButton = document.createElement('button');
  likeButton.setAttribute('type', 'button');
  likeButton.classList.add('btn', 'element__like');
  description.append(likeButton);




  const elementTrashNode = document.querySelectorAll('.element__trash-img');
  elementTrashNode.forEach(trash => {
    trash.addEventListener('click', () => {
      trash.closest('.element').remove();
    });

    const elementLike = document.querySelectorAll('.element__like');
    elementLike.forEach(like => {
      like.addEventListener('click', () => {
        like.classList.toggle('element__like_active');
      })
    });

  })

}

for (let i = 0; i < initialCards.length; i++) {
  cardSubmitHandler(initialCards[i].link, initialCards[i].name);
}

buttonSubmit.addEventListener('click', () => {
  cardSubmitHandler(imageInput.value, titleInput.value)
});





const cardImage = document.querySelectorAll('.element__image');

function openPopupCard(srcImage, elementTitle) {

  const popupElement = document.querySelector('.popup_element');
  popupElement.classList.add('popup_opened');
  popupElement.querySelector('.popup__photo').src = srcImage.src;
  popupElement.querySelector('.popup__title').textContent = elementTitle.textContent;
  const closePopupElement = popupElement.querySelector('.popup__close');
  closePopupElement.addEventListener('click', () => {
    popupElement.classList.remove('popup_opened');
  })
};

cardImage.forEach(photo => {
  photo.addEventListener('click', () => {
    openPopupCard(photo, photo.closest('.element').querySelector('.element__title'))
  });
});















