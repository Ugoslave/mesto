export class Popup {

  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    
    if (evt.key === 'Escape') { // если нажата клавиша Esc -
      this.close(); // вызываем функцию сlosePopup;
    }
  }

  _closePopupByOverlayClick = (evt) => {

    if (evt.target.classList.contains('popup__container') || // если класс элемента, по которому кликнули, "popup__container"
        evt.target.classList.contains('popup')) { // или "popup" -
        this.close(); // вызывает функцию сlosePopup; 
    }
  }

  setEventListeners() {
    this._closeButton = this._popupElement.querySelector('.popup__button-close'); // выбираем в проекте класс кнопки "Закрыть";
    this._overlay = document.querySelector('.project-area'); // выбираем в проекте класс тега <body>;

    this._closeButton.addEventListener('click', () => this.close());
    this._overlay.addEventListener('click', this._closePopupByOverlayClick);
  }
}