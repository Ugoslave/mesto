export class Card {
  static _addCardPopup = document.querySelector('.popup_content_add-element');

  static _imagePopup = document.querySelector('.popup_place_image-popup');

  constructor(initialCards, cardTemplate) {
    this._initialCards = initialCards;
    this._cardTemplate = document.querySelector(cardTemplate).content;
    
  }

  render(container) {
    
    this._view = document.querySelector('.elements').cloneNode(true);
    
    this._popup = document.querySelector('.popup_content_add-element');

    this._image = document.querySelector('.popup__image');

    this._imageCaption = document.querySelector('.popup__caption');

    this._inputTitle = this._popup.querySelector('.popup__input_data_title');
    this._inputLink = this._popup.querySelector('.popup__input_data_link');
    this._form = this._popup.querySelector('.popup__form_place_add-element');
    this._form.addEventListener('submit', this._handlerFormSubmit);
    
    this._initialCards.forEach(this._renderCard);

    container.append(this._view);
  }

  _renderCard = (data) => {
    
    const item = this._cardTemplate.cloneNode(true);
    
    item.querySelector('.element__title').textContent = data.name;

    item.querySelector('.element__image').src = data.link;

    item.querySelector('.element__image').alt = data.name;

    item.querySelector('.element__remove-button').addEventListener('click', this._removeCard);

    item.querySelector('.element__button').addEventListener('click', this._changeLikeButtonColor);

    item.querySelector('.element__image').addEventListener('click', this._openImagePopup);

    this._view.prepend(item);

  }

  openAddCardPopup() {
    Card._addCardPopup.classList.add('popup_active');
    Card._addCardPopup.querySelector('.popup__form').reset();
  }

  closeAddCardPopup() {
    Card._addCardPopup.classList.remove('popup_active');
  }

  _openImagePopup = (evt) => {
    const captionValue = evt.target.closest('.element');
    Card._imagePopup.classList.add('popup_active');
    this._image.src = evt.target.src;
    this._imageCaption.textContent = captionValue.textContent;
    
    Card._imagePopup.querySelector('.popup__button-close_place_image-popup').addEventListener('click', this._closeImagePopup);
  }

  _closeImagePopup = () => {
    Card._imagePopup.classList.remove('popup_active');
  }
  
  _handlerFormSubmit = (evt) => {
    
    evt.preventDefault();

    this._newCard = this._renderCard({ name: this._inputTitle.value, link: this._inputLink.value });

    this.closeAddCardPopup();
  }

  _removeCard = (evt) => {
    evt.target.closest('.element').remove();
  }

  _changeLikeButtonColor = (evt) => {
    evt.target.classList.toggle('element__button_active');
  }

}