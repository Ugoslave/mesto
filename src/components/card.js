export class Card { // создаем и экспортируем класс карточки
  
  constructor(data, cardTemplate, handleCardClick) {
    this._cardTemplate = document.querySelector(cardTemplate).content;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick.open;
  }

  _getCardTemplate() { // реализуем метод класса, возвращающий шаблон разметки карточки;
    return this._cardTemplate.cloneNode(true); //клонируем шаблон карточки с содержимым
  }

  _removeCard = (evt) => {// реализуем метод класса для удаления карточки;
    evt.target.closest('.element').remove();
  }

  _changeLikeButtonColor = (evt) => {// реализуем метод класса для отметки понравившейся карточки;
    evt.target.classList.toggle('element__button_active');
  }

  _setEventListeners() { // реализуем метод класса, подключающий карточке все слушатели и возвращающий её;
    this._cardElement = this._getCardTemplate();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._removeCardButton = this._cardElement.querySelector('.element__remove-button');
    this._likeButton = this._cardElement.querySelector('.element__button');

    this._removeCardButton.addEventListener('click', this._removeCard); // подключаем кнопке "Удалить" слушатель для удаления карточки;
    this._likeButton.addEventListener('click', this._changeLikeButtonColor); // подключаем кнопке "Лайк" слушатель для реализации отметки понравившейся карточки;
    this._cardImage.addEventListener('click', this._handleCardClick); // подключаем изображению карточке слушатель для открытия попапа с увеличенным изображением;

    return this._cardElement;
  }

  renderCard() { // реализуем метод отрисовки карточки;
    this._setEventListeners();
  
    this._cardTitle = this._cardElement.querySelector('.element__title');
    this._cardImage = this._cardElement.querySelector('.element__image');

    this._cardTitle.textContent = this._name; // присваиваем текстовому узлу названия карточки значение ключа "Имя" из заданного массива
    this._cardImage.src = this._link;// присваиваем атрибуту изображения карточки значение ключа "Ссылка" из заданного массива
    this._cardImage.alt = this._name; // присваиваем атрибуту изображения карточки значение ключа "Имя" из заданного массива

    return this._cardElement;
  }
}