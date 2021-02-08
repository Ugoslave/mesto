import './index.css';

import {initialCards} from '../utils/initial-cards.js';

import {addButton, 
  editButton, 
  editPopup, 
  addCardPopup, 
  imagePopup, 
  inputTitle, 
  inputLink, 
  userDataSelector, 
  cardsContainer} from '../utils/constants.js'

import {Card} from '../components/card.js';
import {validationConfig} from '../utils/validationConfig.js';
import {FormValidator} from '../components/FormValidator.js';
import {setSubmitButton} from '../utils/utils.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';

const editformValidation = new FormValidator(validationConfig, '.popup__form');
editformValidation.enableValidation();  // с помощью метода  класса FormValidator 
const addFormValidation = new FormValidator(validationConfig, '.popup__form_place_add-element');
addFormValidation.enableValidation(); // запускаем валидацию указанной формы;
 
const userInfo = new UserInfo(userDataSelector);

const popupWithImage = new PopupWithImage(imagePopup);
const popupWithAddForm = new PopupWithForm(addCardPopup, handleFormSubmit, userInfo, setSubmitButton, addFormValidation);
const popupWithEditForm = new PopupWithForm(editPopup, handleEditFormSubmit, userInfo, setSubmitButton, editformValidation);

const cardList = new Section({items: initialCards, renderer: (item) => {
  const card = new Card(item, '.card', popupWithImage); // записываем в переменную экземпляр класса Card (новых карточек);
  const cardElement = card.renderCard();
  cardList.addItem(cardElement);
  }
}, cardsContainer);

cardList.renderItems();

function handleEditFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  userInfo.setUserInfo();
  popupWithEditForm.close(); // реализуем автоматическое закрытие "Попап-окна";
}

function handleFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и создание новой карточки;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  const newCardTitle = inputTitle.value; // присваиваем переменной значение, введенноё пользователем в поле "Название";
  const newCardLink = inputLink.value; // присваиваем переменной значение, введенноё пользователем в поле "Ссылка";
  
  const card = new Card({ name: newCardTitle, link: newCardLink }, '.card', popupWithImage); // записываем в переменную экземпляр класса Card (новых карточек);
  const element = card.renderCard();
  cardsContainer.prepend(element); // с помощью метода класса отрисовываем карточки в указанном блоке;

  popupWithAddForm.close(); // закрываем попап-окно;
}

addButton.addEventListener('click', popupWithAddForm.open); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
editButton.addEventListener('click', popupWithEditForm.open); // подключаем "слушатель", вызывающий функцию openEditPopup при нажатии на кнопку "Войти";