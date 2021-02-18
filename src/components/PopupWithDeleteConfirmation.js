import {Popup} from './Popup.js';

export class PopupWithDeleteConfirmation extends Popup {

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector, handleFormSubmit);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = document.querySelector(popupSelector).querySelector('.popup__form');
  }
  
  open = () => {
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";
  }
}