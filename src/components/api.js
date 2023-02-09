export class Api {

  static config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-3',
    headers: {
      authorization: 'b58fa111-da90-4832-8974-76658f993edf',
      'Content-Type': 'application/json'
    }
  };

  /**
   * Загрузка информации о пользователе с сервера
   */
  static getUser() {
    return fetch(`${Api.config.baseUrl}/users/me`, {
      headers: {
        ...Api.config.headers
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  /**
   * Редактирование профиля
   * @param {string} name - имя профиля
   * @param {string} about - описание профиля
   */
  static editProfile(name, about) {
    return fetch(`${Api.config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...Api.config.headers
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  /**
   * Получение всех карточек
   */
  static getCards() {
    return fetch(`${Api.config.baseUrl}/cards`, {
      headers: {
        ...Api.config.headers
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  /**
   * Создание карточки
   * @param {string} name - название карточки
   * @param {string} link - ссылка на картинку карточки
   */
  static createCard(name, link) {
    return fetch(`${Api.config.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        ...Api.config.headers
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  /**
   * Удалить карточку
   * @param {string} cardId - ID карточки
   */
  static deleteCard(cardId) {
    return fetch(`${Api.config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        ...Api.config.headers
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }


  /**
   * Поставить лайк карточке
   * @param {string} cardId - ID карточки
   */
  static putLike(cardId) {
    return fetch(`${Api.config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        ...Api.config.headers
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  /**
   * Удалить лайк с карточки
   * @param {string} cardId - ID карточки
   */
  static deleteLike(cardId) {
    return fetch(`${Api.config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        ...Api.config.headers
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  /**
   * Обновить аватар картинку пользователя
   * @param {string} avatarUrl - url ссылку на картинку аватар
   */
  static updateAvatarUser(avatarUrl) {
    return fetch(`${Api.config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        ...Api.config.headers
      },
      body: JSON.stringify({
        avatar: avatarUrl
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

}

