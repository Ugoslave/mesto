import {Popup} from './Popup.js';

export class PopupWithDeleteConfirmation extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = document.querySelector(popupSelector).querySelector('.popup__form');
  }
  
  open = (callback) => {
    super.open();
    this._popupForm.removeEventListener('submit', this._submitHandler);
    this._submitHandler = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._submitHandler); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";
  }
}