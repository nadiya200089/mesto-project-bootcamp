// function likeClickHandler(event) {
//   event.target.classList.toggle('element__like_active');
// }

const profileEditbtnNode = document.querySelector('.profile__edit-button');
const profileAddbtnNode = document.querySelector('.profile__add-button');
const elementNodes = document.querySelectorAll('.element');
const popupNewPlaceNode = document.querySelector('.popup_new-place');
const popupProfileNode = document.querySelector('.popup_profile');
const popupElementNode = document.querySelector('.popup_element');
const elementsContainer = document.querySelector('.elements');


const initialCard = [
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
// const elementTemplate = document.querySelector('#element-template').content;

// initialCard.forEach(function (element) {
// const cardElement = elementTemplate.cloneNode(true);

// cardElement.querySelector('.element__image').src = element.link;
// cardElement.querySelector('.element__title').textContent = element.name;

//  elementsContainer.append(cardElement);

// });






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


for (const elementNode of elementNodes) {
  const elementTrashNode = elementNode.querySelector('.element__trash');
  const elementLikeNode = elementNode.querySelector('.element__like');
  const elementImageNode = elementNode.querySelector('.element__image');
  const srcImage = elementImageNode.src;
  const elementTitle = elementNode.querySelector('.element__title').textContent;

  elementTrashNode.addEventListener('click', () => {
    elementNode.remove();
  });

  elementLikeNode.addEventListener('click', () => {
    elementLikeNode.classList.toggle('element__like_active');
  });

  elementImageNode.addEventListener('click', () => {
    openPopupImage(popupElementNode, srcImage, elementTitle);
  });  
}

function openPopupImage(popupNode, srcImage, elementTitle) {
  const popupImageNode = popupNode.querySelector('.popup__image');
  const popupTitleNode = popupNode.querySelector('.popup__title');

  popupImageNode.src = srcImage;
  popupTitleNode.textContent = elementTitle;
  openPopup(popupNode)
}




const formElement = document.querySelector(".form_profile-info");
const nameInput = document.querySelector(".form__user-name");
const jobInput = document.querySelector(".form__user-description");

  const titleInput = document.querySelector(".form__places-name");
  const imageInput = document.querySelector(".form__src");


// здесь в функцию добавила форму добавления карточки
function formSubmitHandler(evt) {
  evt.preventDefault();

  document.querySelector(".profile__name").textContent = nameInput.value;
  document.querySelector(".profile__description").textContent = jobInput.value;
  document.querySelector(".element__title").textContent = titleInput.value;
  // document.querySelector(".element__image").src = imageInput.src;
  // cardElement.cloneNode(true);
  // elementsContainer.appeand(cardElement);


}

formElement.addEventListener('submit', formSubmitHandler);

// const formNewPlace = document.querySelector('.form_new-place');

// function formCreateCards(evt) {
//   evt.preventDefault();
//   document.querySelector(".element__image").src = imageInput.src;
//   cardElement.cloneNode(true);
//   elementsContainer.appeand(cardElement);


// }

// formNewPlace.addEventListener('click', formCreateCards);







// const buttonSubmit = document.querySelector('form__submit-button');
// const profile = document.querySelector('.profile');
// function addCard(imageValue, titleValue) {
// const elementsTemplate = document.querySelector('#elements-template').textContent;
// const Element = elementsTemplate.querySelector('.element').cloneNode(true);
// Element.querySelector('.element__image').textContent = imageSrc;
// Element.querySelector('.element__title').textContent = titleValue;
// profile.append(elementsTemplate);
// }

// buttonSubmit.addEventListener('click', function () {
//   evt.preventDefault();
//   const image = document.querySelector('.form__src');
//   const title = document.querySelector('.form__places-name');

//   addCard(image.src, title.value);
//   //renderHasSongs();

//   image.src = '';
//   title.value = '';
// });


const buttonSubmit = document.querySelector('.create-cards');

  
function cardSubmitHandler() {
  ev.preventDefault();
  let titleInputValue = titleInput.value;
  let card = document.createElement('div');
card.classList.add("element");
elementsContainer.append(card);
let buttonTrash = document.createElement('button');
buttonTrash.classList.add('element__trash', "btn");
card.append(buttonTrash);
let trashImg = document.createElement("img");
trashImg.setAttribute('src', "./images/Trash.svg");
trashImg.classList.add('element__trash-img');
buttonTrash.append(trashImg);
let cardImage = document.createElement('img');
cardImage.classList.add('img', 'element__image');
cardImage.setAttribute('src', "./images/karachaevsk.jpg");
card.append(cardImage);
let description = document.createElement('div');
description.classList.add('element__description');
card.append(description);
let descriptionTitle = document.createElement('h2');
descriptionTitle.classList.add('element__title');
descriptionTitle.textContent = titleInputValue;
description.append(descriptionTitle);
let likeButton = document.createElement('button');
likeButton.classList.add('btn', 'element__like');
description.append(likeButton);

}
buttonSubmit.addEventListener('click', cardSubmitHandler);



// const elementTrashNode = document.querySelector('.element__trash');

// elementTrashNode.addEventListener('click', (event) => {
//   const imageElement = elementTrashNode.closest('.element');
//   imageElement.remove();
// });



