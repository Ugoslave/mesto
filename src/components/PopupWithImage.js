import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  
  constructor(popupSelector) {
    super(popupSelector);
    this._photoImagePopup = document.querySelector('.popup__image'); // выбираем в проекте класс изображения "Попап-окна";
    this._captionImagePopup = document.querySelector('.popup__caption'); // выбираем в проекте класс подписи к изображению "Попап-окна";
  }

  open = (link, name) => {
    this._photoImagePopup.src = link; // присваиваем атрибуту изображения попап-окна значение атрибута выбранного изображения карточки;
    this._captionImagePopup.textContent = name;
    super.open();
  }
}