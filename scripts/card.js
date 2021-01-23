import {setSubmitButton, 
        resetInputErrors, 
        resetInputValidState, 
        handleKeydown, 
        closePopupByOverlayClick} from './utils.js';

export class Card { // создаем и экспортируем класс карточки
  static _addCardPopup = document.querySelector('.popup_content_add-element');
  static _imagePopup = document.querySelector('.popup_place_image-popup');
  static _overlay = document.querySelector('.project-area');
  
  constructor(initialCards, cardTemplate) {
    this._initialCards = initialCards;
    this._cardTemplate = document.querySelector(cardTemplate).content;
  }

  render(container) { // реализуем метод отрисовки карточек в заданном месте
    this._view = document.querySelector('.elements').cloneNode(true);
    this._popup = document.querySelector('.popup_content_add-element');
    this._image = document.querySelector('.popup__image');
    this._imageCaption = document.querySelector('.popup__caption');
    this._inputTitle = this._popup.querySelector('.popup__input_data_title');
    this._inputLink = this._popup.querySelector('.popup__input_data_link');
    this._form = this._popup.querySelector('.popup__form_place_add-element');
    
    this._form.addEventListener('submit', this._handlerFormSubmit); // подключаем слушатель обработки формы на форму добавления нового элемента
    
    this._initialCards.forEach(this._renderCard); // посредством метода _renderCard отрисовываем каждую карточку из исходного массива

    container.append(this._view); // добавляем карточки в конец контейнера;
  }

  _renderCard = (data) => { // реализуем метод отрисовки карточки
    const item = this._cardTemplate.cloneNode(true); //клонируем шаблон карточки с содержимым
    
    item.querySelector('.element__title').textContent = data.name; // присваиваем текстовому узлу названия карточки значение ключа "Имя" из заданного массива
    item.querySelector('.element__image').src = data.link;// присваиваем атрибуту изображения карточки значение ключа "Ссылка" из заданного массива
    item.querySelector('.element__image').alt = data.name; // присваиваем атрибуту изображения карточки значение ключа "Имя" из заданного массива

    item.querySelector('.element__remove-button').addEventListener('click', this._removeCard); // подключаем кнопке "Удалить" слушатель для удаления карточки;
    item.querySelector('.element__button').addEventListener('click', this._changeLikeButtonColor); // подключаем кнопке "Лайк" слушатель для реализации отметки понравившейся карточки;
    item.querySelector('.element__image').addEventListener('click', this._openImagePopup); // подключаем изображению карточке слушатель для открытия попапа с увеличенным изображением;

    this._view.prepend(item); // добавляем карточки в начало списка;
  }

  openAddCardPopup() { // реализуем открытие попапа добавления новой карточки с помощью метода класса
    const inputErrors = Card._addCardPopup.querySelectorAll('.popup__input-error');
    const inputs = Card._addCardPopup.querySelectorAll('.popup__input');

    Card._addCardPopup.classList.add('popup_active'); 
    Card._addCardPopup.querySelector('.popup__form').reset(); // сбрасываем данные формы;
    setSubmitButton(Card._addCardPopup); // проверяем состояние кнопки "Создать";
    resetInputErrors(inputErrors); // сбрасываем ошибки формы;
    resetInputValidState(inputs); // сбрасываем ошибочное состояние полей формы;

    Card._overlay.addEventListener('keydown', handleKeydown); // подключаем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу ESC;
    Card._addCardPopup.addEventListener('click', closePopupByOverlayClick); // подключаем "слушатель" функции, реализующей закрытие попапа при клике по оверлею;
  }

  closePopup(item) { // реализуем закрытие попапа добавления новой карточки с помощью метода класса
    item.classList.remove('popup_active');
    Card._overlay.removeEventListener('keydown', handleKeydown); // удаляем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу ESC;
    item.removeEventListener('click', closePopupByOverlayClick); // удаляем "слушатель" функции, реализующей закрытие попапа при клике по оверлею;
  }

  _openImagePopup = (evt) => { // реализуем открытие попапа просмотра изображения с помощью приватного метода класса
    const captionValue = evt.target.closest('.element');
    const imagePopupCloseButton = Card._imagePopup.querySelector('.popup__button-close_place_image-popup')
    
    Card._imagePopup.classList.add('popup_active');
    this._image.src = evt.target.src; // присваиваем атрибуту изображения попапа значение атрибута изображения, по которому кликнул пользователь;
    this._imageCaption.textContent = captionValue.textContent; // присваиваем текстовому содержимому подписи изображения название карточки
    
    Card._overlay.addEventListener('keydown', handleKeydown); // подключаем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
    imagePopupCloseButton.addEventListener('click', () => this.closePopup(Card._imagePopup)); // подключаем слушатель для закрытия попапа при клике на кнопку закрытия;
    Card._imagePopup.addEventListener('click', closePopupByOverlayClick);// подключаем "слушатель" функции, реализующей закрытие попапа при клике по оверлею;
  }

  _handlerFormSubmit = (evt) => { // реализуем метод класса для обработки формы добавления новой карточки;
    evt.preventDefault();
    this._newCard = this._renderCard({ name: this._inputTitle.value, link: this._inputLink.value });
    this.closePopup(Card._addCardPopup);
  }

  _removeCard = (evt) => {// реализуем метод класса для удаления карточки;
    evt.target.closest('.element').remove();
  }

  _changeLikeButtonColor = (evt) => {// реализуем метод класса для отметки понравившейся карточки;
    evt.target.classList.toggle('element__button_active');
  }
}