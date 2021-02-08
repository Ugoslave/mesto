import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {

  constructor(popupSelector, handleFormSubmit, handleOpenPopup) {
    super(popupSelector, handleFormSubmit, handleOpenPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = document.querySelector(popupSelector).querySelector('.popup__form');
    this._inputs = this._popupElement.querySelectorAll('.popup__input');
    this._handleOpenPopup = handleOpenPopup;
  }

  _getInputValues() {
    const inputsArray = Array.from(this._inputs);
    
    const inputValues = {};
    inputsArray.forEach(item => inputValues[item.name] = item.value);

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', () => this._handleFormSubmit(this._getInputValues())); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";
  }

  open = () => {
    super.open()
    this._handleOpenPopup();
  }

  close = () => {
    super.close();
    this._popupForm.reset();
  }
}