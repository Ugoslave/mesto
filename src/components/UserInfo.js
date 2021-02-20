export class UserInfo {

  constructor(userDataSelector) {
    this._name = userDataSelector.name;
    this._about = userDataSelector.about;
    this._avatar = userDataSelector.avatar;
    this._profileTitle = document.querySelector(userDataSelector.name); // выбираем в проекте класс заголовка секции "Профиль";
    this._profileSubtitle = document.querySelector(userDataSelector.about); // выбираем в проекте класс подзаголовка секции "Профиль";
    this._profileAvatar = document.querySelector(userDataSelector.avatar);
  }

  getUserInfo() {
    return {
      name: this._profileTitle.textContent, 
      about: this._profileSubtitle.textContent,
      avatar: this._profileAvatar.src
      }
    }

  setUserInfo(name, about, avatar) {
    this._profileTitle.textContent = name;
    this._profileSubtitle.textContent = about;
    this._profileAvatar.src = avatar;
    }
  }