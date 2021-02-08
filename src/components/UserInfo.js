export class UserInfo {

  constructor(userDataSelector) {
    this._name = userDataSelector.name;
    this._about = userDataSelector.about;
    this._inputName = document.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
    this._inputAbout = document.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне";
    this._profileTitle = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль";
    this._profileSubtitle = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль";
  }

  getUserInfo = () => {
    return {
      name: this._name.textContent, 
      about: this._about.textContent
      }
    }

  setUserInfo() {
    this._profileTitle.textContent = this._inputName.value;
    this._profileSubtitle.textContent = this._inputAbout.value;
    }
  }