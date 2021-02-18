import {Popup} from './Popup.js';

export class PopupWithDeleteConfirmation extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = document.querySelector(popupSelector).querySelector('.popup__form');
  }
  
  open = () => {
    super.open();
  }

  setEventListeners(callback) {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', callback); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";
  }
}