export class Popup {

  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open = () => {
    this._popupSelector.classList.add('popup_active');
    this.setEventListeners();
  }

  close = () => {
    this._popupSelector.classList.remove('popup_active');
    this.removeEventListeners();
  }

  _handleEscClose = (evt) => {
    this._activePopup = document.querySelector('.popup_active'); // находим в проекте класс активного попап-окна;
    
    if (evt.key === 'Escape') { // если нажата клавиша Esc -
      this.close(); // вызываем функцию сlosePopup;
    }
  }

  _closePopupByOverlayClick = (evt) => {
    const activePopup = document.querySelector('.popup_active'); // находим в проекте класс активного попап-окна;
    if (evt.target.classList.contains('popup__container') || // если класс элемента, по которому кликнули, "popup__container"
        evt.target.classList.contains('popup')) { // или "popup" -
        this.close(); // вызывает функцию сlosePopup; 
    }
  }

  setEventListeners() {
    this._closeButton = document.querySelector('.popup_active').querySelector('.popup__button-close'); // выбираем в проекте класс кнопки "Закрыть";
    this._projectPage = document.querySelector('.project-area');
    this._overlay = document.querySelector('.project-area'); // выбираем в проекте класс тега <body>;

    this._closeButton.addEventListener('click', this.close);
    this._projectPage.addEventListener('keydown', this._handleEscClose);
    this._overlay.addEventListener('click', this._closePopupByOverlayClick);
  }

  removeEventListeners() {
    this._closeButton.removeEventListener('click', this.close);
    this._projectPage.removeEventListener('keydown', this._handleEscClose);
    this._overlay.removeEventListener('click', this._closePopupByOverlayClick);
  }
}