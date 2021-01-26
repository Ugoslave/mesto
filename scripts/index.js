
import {initialCards} from './initial-cards.js';

import {Card} from './card.js';

import {validationConfig} from './validationConfig.js';

import {FormValidator} from './FormValidator.js';

import {setSubmitButton, 
        openPopup,
        handleKeydown, 
        closePopup, 
        closePopupByOverlayClick} from './utils.js';

const addButton = document.querySelector('.profile__add-button'); // выбираем в проекте класс кнопки "Добавить";
const closeButtonAddElementPopup = document.querySelector('.popup__button-close_place_add-element');
const editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти";
const closeButton = document.querySelector('.popup__button-close'); // выбираем в проекте класс кнопки "Закрыть";
const editPopup = document.querySelector('.popup'); // выбираем в проекте класс "Попап-окна";
const form = document.querySelector('.popup__form'); // выбираем в проекте класс формы в "Попап-окне";
const inputName = form.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
const inputAbout = form.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне";
const profileTitle = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль";
const profileSubtitle = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль";
const overlay = document.querySelector('.project-area'); // выбираем в проекте класс тега <body>;
const addCardPopup = document.querySelector('.popup_content_add-element'); // выбираем в проекте модификатор "Попап-окна";
const imagePopup = document.querySelector('.popup_place_image-popup'); // выбираем в проекте класс "Попап-окна";
const photoImagePopup = document.querySelector('.popup__image'); // выбираем в проекте класс изображения "Попап-окна";
const captionImagePopup = document.querySelector('.popup__caption'); // выбираем в проекте класс подписи к изображению "Попап-окна";
const closeButtonImagePopup = document.querySelector('.popup__button-close_place_image-popup'); // выбираем в проекте класс кнопки "Закрыть";
const inputTitle = document.querySelector('.popup__input_data_title'); // выбираем в проекте класс поля ввода "Название" формы в попап-окне "Добавить элемент";
const inputLink = document.querySelector('.popup__input_data_link'); // выбираем в проекте класс второго поля ввода "Ссылка" формы в попап-окне "Добавить элемент";
const addCardForm = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте модификатор формы в "Попап-окне";
const cardsContainer = document.querySelector('.elements');

const editformValidation = new FormValidator(validationConfig, '.popup__form');
editformValidation.enableValidation();  // с помощью метода  класса FormValidator 
const addFormValidation = new FormValidator(validationConfig, '.popup__form_place_add-element');
addFormValidation.enableValidation(); // запускаем валидацию указанной формы;

initialCards.forEach((item) => {
  const card = new Card(item, '.card', handleKeydown); // записываем в переменную экземпляр класса Card (новых карточек);
  const element = card.renderCard();
  cardsContainer.append(element); // с помощью метода класса отрисовываем карточки в указанном блоке;
});

function handleFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  profileTitle.textContent = inputName.value; // заменяем текстовое содержимое заголовка секции "Профиль" значением поля ввода "Имя" формы "Попап-окна";
  profileSubtitle.textContent = inputAbout.value; // заменяем текстовое содержимое подзаголовка секции "Профиль" значением поля ввода "О себе" формы "Попап-окна";
  closePopup(editPopup); // реализуем автоматическое закрытие "Попап-окна";
}

function handleAddElementFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и создание новой карточки;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  const NewCardTitle = inputTitle.value; // присваиваем переменной значение, введенноё пользователем в поле "Название";
  const NewCardLink = inputLink.value; // присваиваем переменной значение, введенноё пользователем в поле "Ссылка";
  
  const card = new Card({ name: NewCardTitle, link: NewCardLink }, '.card', handleKeydown); // записываем в переменную экземпляр класса Card (новых карточек);
  const element = card.renderCard();
  cardsContainer.prepend(element); // с помощью метода класса отрисовываем карточки в указанном блоке;
  
  closePopup(addCardPopup); // закрываем попап-окно;
}

function openEditPopup() { // объявляем функцию с аргументом, реализующую открытие любого "Попап-окна";
  openPopup(editPopup);
  inputName.value = profileTitle.textContent; // присваиваем полю ввода "Имя" формы "Попап-окна" текстовое содержимое заголовка секции "Профиль";
  inputAbout.value = profileSubtitle.textContent; // присваиваем полю ввода "О себе" формы "Попап-окна" текстовое содержимое подзаголовка секции "Профиль";
  editformValidation.resetInputErrors();
  setSubmitButton(editPopup); // вызываем функцию setSubmitButton для валидации полей при открытии попапа;

  editPopup.addEventListener('click', closePopupByOverlayClick); // подключаем слушатель, реализующий закрытие попап-окон при клике по оверлею;
  overlay.addEventListener('keydown', handleKeydown); // подключаем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
  closeButton.addEventListener('click', () => closePopup(editPopup)); // подключаем "слушатель", вызывающий функцию "сloseEditPopup" при нажатии на кнопку "Закрыть";
  form.addEventListener('submit', handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";
}

function openAddCardPopup() { // реализуем открытие попапа добавления новой карточки с помощью метода класса
  openPopup(addCardPopup);
  addCardPopup.querySelector('.popup__form').reset(); // сбрасываем данные формы;
  setSubmitButton(addCardPopup); // проверяем состояние кнопки "Создать";
  addFormValidation.resetInputErrors();

  addCardPopup.addEventListener('click', closePopupByOverlayClick); // подключаем "слушатель" функции, реализующей закрытие попапа при клике по оверлею;
  closeButtonAddElementPopup.addEventListener('click', () => closePopup(addCardPopup));// подключаем "слушатель", реализующую закрытие попапапри "Добавить элемент" при нажатии на кнопку;
  addCardForm.addEventListener('submit', handleAddElementFormSubmit);// подключаем "слушатель", вызывающий функцию handleAddElementFormSubmit при нажатии на кнопку "Создать";
}

export function openImagePopup(evt) { // объявляем функцию, реализующую открытие попап-окна для просмотра выбранного изображения;
  const captionValue = evt.target.closest('.element'); // присваиваем переменной класс карточки, по изображению которой кликнул пользователь;
  openPopup(imagePopup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  photoImagePopup.src = evt.target.src; // присваиваем атрибуту изображения попап-окна значение атрибута выбранного изображения карточки;
  captionImagePopup.textContent = captionValue.textContent; // присваиваем текстовому содержимому подписи к изображению попап-окна текстовое содержимое заголовка выбранной карточки;

  imagePopup.addEventListener('keydown', handleKeydown);; // подключаем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
  closeButtonImagePopup.addEventListener('click', () => closePopup(imagePopup)); // подключаем слушатель для закрытия попапа при клике на кнопку закрытия;
  imagePopup.addEventListener('click', closePopupByOverlayClick);// подключаем "слушатель" функции, реализующей закрытие попапа при клике по оверлею;
}

addButton.addEventListener('click', openAddCardPopup); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
editButton.addEventListener('click', openEditPopup); // подключаем "слушатель", вызывающий функцию openEditPopup при нажатии на кнопку "Войти";
