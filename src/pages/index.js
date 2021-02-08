import './index.css';

import {addButton, 
        editButton,
        userDataSelector, 
        inputName, 
        inputAbout, 
        validationConfig, 
        initialCards, 
        cardsContainer} from '../utils/constants.js'

import {Card} from '../components/card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';

const editformValidation = new FormValidator(validationConfig, '.popup__form');
editformValidation.enableValidation();  // с помощью метода  класса FormValidator 
const addFormValidation = new FormValidator(validationConfig, '.popup__form_place_add-element');
addFormValidation.enableValidation(); // запускаем валидацию указанной формы;
 
const userInfo = new UserInfo(userDataSelector);

const popupWithImage = new PopupWithImage('.popup_place_image-popup');
popupWithImage.setEventListeners();
const popupWithAddForm = new PopupWithForm('.popup_content_add-element', handleFormSubmit, handleAddCardForm);
popupWithAddForm.setEventListeners();
const popupWithEditForm = new PopupWithForm('.popup', handleEditFormSubmit, handleOpenProfileForm);
popupWithEditForm.setEventListeners();

const cardList = new Section({items: initialCards, renderer: (item) => {
  const card = new Card(item, '.card', popupWithImage); // записываем в переменную экземпляр класса Card (новых карточек);
  const cardElement = card.renderCard();
  cardList.addItem(cardElement);
  }
}, cardsContainer);

cardList.renderItems();

function handleEditFormSubmit() { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  userInfo.setUserInfo(inputName.value, inputAbout.value);
  popupWithEditForm.close(); // реализуем автоматическое закрытие "Попап-окна";
}

function handleFormSubmit(data) { // объявляем функцию, реализующую сохранение значений полей ввода данных и создание новой карточки;
  const card = new Card({ name: data.title, link: data.link }, '.card', popupWithImage); // записываем в переменную экземпляр класса Card (новых карточек);
  const element = card.renderCard();
  cardsContainer.prepend(element); // с помощью метода класса отрисовываем карточки в указанном блоке;

  popupWithAddForm.close(); // закрываем попап-окно;
}

function handleOpenProfileForm() {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputAbout.value = userData.about;
  editformValidation.resetInputErrors();
  editformValidation.setButtonState(false);
}

function handleAddCardForm() {
  addFormValidation.resetInputErrors();
  addFormValidation.setButtonState(false);
}

addButton.addEventListener('click', popupWithAddForm.open); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
editButton.addEventListener('click', popupWithEditForm.open); // подключаем "слушатель", вызывающий функцию openEditPopup при нажатии на кнопку "Войти";