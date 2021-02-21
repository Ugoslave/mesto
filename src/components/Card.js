export class Card { // создаем и экспортируем класс карточки
  
  constructor(data, cardTemplate, handleCardClick, api, popupWithConfirmation, userId) {
    this._cardTemplate = document.querySelector(cardTemplate).content;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id; 
    this._likes = data.likes;
    this._owner = data.owner;
    this._handleCardClick = handleCardClick.open;
    this._api = api;
    this._popupWithConfirmation = popupWithConfirmation;
    this._userId = userId;
  }

  _getCardTemplate() { // реализуем метод класса, возвращающий шаблон разметки карточки;
    return this._cardTemplate.cloneNode(true); //клонируем шаблон карточки с содержимым
  }

  _removeCard = (evt) => {// реализуем метод класса для удаления карточки;
    evt.preventDefault();
    this._api.removeElement(this._id) // вызываем метод API для удаления карточки с сервера
             .then(() => {
               document.querySelector('.element').remove(); // удаляем карточку из DOM
               this._popupWithConfirmation.close();
             }) 
             .catch(err => console.log(err));
  }

  _setLikeButton = (evt) => {// реализуем метод класса для отметки понравившейся карточки;
    
    if (evt.target.classList.contains('element__button_active')) { // проверяем, поставлен лайк пользователем или нет
      this._api.deleteLikeElement(this._id) // если поставлен - вызываем метод API, удаляющий лайк,
               .then((res) => { 
                 const likesNumber = res.likes;
                 evt.target.classList.remove('element__button_active'); // удаляем активный класс у кнопки лайка,
                 this._likesNumberBox.textContent = likesNumber.length; // меняем счетчик лайков
               }) 
               .catch(err => console.log(err));
    } else {
        this._api.putLikeElement(this._id) // если лайк не поставлен - вызываем метод API для отправки лайка,
                 .then((res) => {
                    const likesNumber = res.likes;
                    evt.target.classList.add('element__button_active'); // добавляем активный класс у кнопки лайка,
                    this._likesNumberBox.textContent = likesNumber.length; // меняем счетчик лайков
                 }) 
                 .catch(err => console.log(err));     
    }
  }

  _setEventListeners() { // реализуем метод класса, подключающий карточке все слушатели и возвращающий её;
    this._cardElement = this._getCardTemplate();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._removeCardButton = this._cardElement.querySelector('.element__remove-button');
    this._likeButton = this._cardElement.querySelector('.element__button');
    this._likesNumberBox = this._cardElement.querySelector('.element__likes-number');

    this._removeCardButton.addEventListener('click', () => {
      this._popupWithConfirmation.open(this._removeCard);
      this._popupWithConfirmation.setEventListeners(); 
    });  // подключаем кнопке "Удалить" слушатель для удаления карточки;

    this._likeButton.addEventListener('click', this._setLikeButton); // подключаем кнопке "Лайк" слушатель для реализации отметки понравившейся карточки;
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name)); // подключаем изображению карточке слушатель для открытия попапа с увеличенным изображением;

    return this._cardElement;
  }

  renderCard() { // реализуем метод отрисовки карточки;
    this._setEventListeners();
  
    this._cardTitle = this._cardElement.querySelector('.element__title');
    this._cardImage = this._cardElement.querySelector('.element__image');
    
    if (this._owner._id !== this._userId) { // проверяем, создавал ли пользователь карточку
      this._removeCardButton.classList.add('element__remove-button_disactive'); // если не создавал - убираем кнопку "Удалить"
    }

    this._check = this._likes.some(item => { // проверяем, поставлен ли пользователем лайк карточке
      return item["_id"] === this._userId;
    });

    if (this._check === true) { // если поставлен - меняем цвет кнопки
      this._likeButton.classList.add('element__button_active');
    }

    this._likesNumberBox.textContent = this._likes.length; // присваиваем текстовому узлу количества лайков значение длины массива "Лайки";
    this._cardTitle.textContent = this._name; // присваиваем текстовому узлу названия карточки значение ключа "Имя" из заданного массива
    this._cardImage.src = this._link;// присваиваем атрибуту изображения карточки значение ключа "Ссылка" из заданного массива
    this._cardImage.alt = this._name; // присваиваем атрибуту изображения карточки значение ключа "Имя" из заданного массива

    return this._cardElement;
  }
}