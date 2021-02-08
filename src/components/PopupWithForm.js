import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {

  constructor(popupSelector, handleFormSubmit, userInfo, setSubmitButton, formValidation) {
    super(popupSelector, handleFormSubmit, userInfo, setSubmitButton, formValidation);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = popupSelector.querySelector('.popup__form');
    this._userInfo = userInfo.getUserInfo();
    this._setSubmitButton = setSubmitButton;
    this._formValidation = formValidation.resetInputErrors;
  }

  _getInputValues() {
    const inputs = this._popupSelector.querySelectorAll('.popup__input');
    const inputsArray = Array.from(inputs);
    
    const InputValues = {name: inputsArray[0].value, about: inputsArray[1].value};

    return InputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";
  }

  close = () => {
    this._popupSelector.classList.remove('popup_active');
    this.removeEventListeners();
  }

  open = () => {
    this._inputName = document.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
    this._inputAbout = document.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне";

    this._popupSelector.classList.add('popup_active');
    this.setEventListeners();
    this._popupForm.reset();
    this._setSubmitButton();
    this._formValidation();
    
    this._inputName.value = this._userInfo.name;
    this._inputAbout.value = this._userInfo.about;
  }
}