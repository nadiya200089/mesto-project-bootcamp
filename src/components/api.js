const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-3',
  headers: {
    authorization: 'b58fa111-da90-4832-8974-76658f993edf',
    'Content-Type': 'application/json'
  }
};

function getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
}

/**
 * Загрузка информации о пользователе с сервера
 */
export function getUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers:
      config.headers

  })
    .then(getResponseData)
}

/**
 * Редактирование профиля
 * @param {string} name - имя профиля
 * @param {string} about - описание профиля
 */
export function editProfile(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then(getResponseData)

}

/**
 * Получение всех карточек
 */
export function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(getResponseData)
}

/**
 * Создание карточки
 * @param {string} name - название карточки
 * @param {string} link - ссылка на картинку карточки
 */
export function createCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(getResponseData)
}

/**
 * Удалить карточку
 * @param {string} cardId - ID карточки
 */
export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(getResponseData)
}


/**
 * Удалить лайк с карточки
 * @param {string} cardId - ID карточки
 */
export function updateLike(cardId, liked) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: liked ? 'DELETE' : 'PUT',
    headers: config.headers
  })
  .then(getResponseData)

}

/**
 * Обновить аватар картинку пользователя
 * @param {string} avatarUrl - url ссылку на картинку аватар
 */
export function updateAvatarUser(avatarUrl) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarUrl
    })
  })
  .then(getResponseData)
}

export function getAllInfo() {
  return Promise.all([getUser(), getCards()])

}
