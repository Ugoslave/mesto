import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = (evt) => {
    this._captionValue = evt.target.closest('.element'); // присваиваем переменной класс карточки, по изображению которой кликнул пользователь;
    this._photoImagePopup = document.querySelector('.popup__image'); // выбираем в проекте класс изображения "Попап-окна";
    this._captionImagePopup = document.querySelector('.popup__caption'); // выбираем в проекте класс подписи к изображению "Попап-окна";

    this._photoImagePopup.src = evt.target.src; // присваиваем атрибуту изображения попап-окна значение атрибута выбранного изображения карточки;
    this._captionImagePopup.textContent = this._captionValue.textContent;
    this._popupSelector.classList.add('popup_active');
    this.setEventListeners();
  }
}