export class Api { // создаем и экспортируем класс работы с API
  
  constructor(dataConfig) {
    this._url = dataConfig.url;
    this._headers = dataConfig.headers;
  }

  getAllCards() { // метод получения всех карточек с сервера
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
        } else {
          return Promise.reject('Server is not found');
      }
    }) 
  }

  addCard(data) { // метод сохранения новой карточки на сервере
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers, 
      body: JSON.stringify(data)
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
        } else {
          return Promise.reject('Server is not found');
      }
    }) 
  }

  removeElement(id) { // метод удаления карточки с сервера
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
        } else {
          return Promise.reject('Server is not found');
      }
    }) 
  }

  getUserData() { // метод получения информации о пользователе с сервера
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
        } else {
          return Promise.reject('Server is not found');
      }
    }) 
  }

  changeUserData(newData) { // метод сохранения новых данных пользователя на сервере
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers, 
      body: JSON.stringify(newData)
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
        } else {
          return Promise.reject('Server is not found');
      }
    }) 
  }

  changeAvatar(avatarLink) { // метод сохранения новой ссылки на аватар
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers, 
      body: JSON.stringify(avatarLink)
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
        } else {
          return Promise.reject('Server is not found');
      }
    }) 
  }

  putLikeElement(id) { // метод для добавления лайка 
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
        } else {
          return Promise.reject('Server is not found');
      }
    }) 
  }

  deleteLikeElement(id) { // метод для снятия лайка
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
        } else {
          return Promise.reject('Server is not found');
      }
    }) 
  }
}