export class UserInfo {

  constructor(userDataSelector) {
    this._name = userDataSelector.name;
    this._about = userDataSelector.about;
    this._profileTitle = document.querySelector(userDataSelector.name); // выбираем в проекте класс заголовка секции "Профиль";
    this._profileSubtitle = document.querySelector(userDataSelector.about); // выбираем в проекте класс подзаголовка секции "Профиль";
  }

  getUserInfo() {
    return {
      name: document.querySelector(this._name).textContent, 
      about: document.querySelector(this._about).textContent
      }
    }

  setUserInfo(name, about) {
    this._profileTitle.textContent = name;
    this._profileSubtitle.textContent = about;
    }
  }