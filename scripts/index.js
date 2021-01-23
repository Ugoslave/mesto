
import {initialCards} from './initial-cards.js';

import {Card} from './card.js';

import {validationConfig} from './validationConfig.js';

import {FormValidator} from './FormValidator.js';

import {setSubmitButton, 
        resetInputErrors, 
        resetInputValidState, 
        handleKeydown, 
        closePopupByOverlayClick} from './utils.js';


const editformValidation = new FormValidator(validationConfig, '.popup__form').enableValidation();  // с помощью метода  класса FormValidator 
const addFormValidation = new FormValidator(validationConfig, '.popup__form_place_add-element').enableValidation(); // запускаем валидацию указанной формы;

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
const inputErrors = document.querySelectorAll('.popup__input-error'); // выбираем в проекте все элементы ошибки поля ввода;
const inputs = document.querySelectorAll('.popup__input'); // выбираем в проекте все поля ввода;
const overlay = document.querySelector('.project-area'); // выбираем в проекте класс тега <body>;

function сloseEditPopup() { // объявляем функцию с аргументами, реализующую закрытие любого "Попап-окна";
  editPopup.classList.remove('popup_active'); // удаляем у класса "Попап-окна" модификатор, реализующий видимость блока;
  overlay.removeEventListener('keydown', handleKeydown); // удаляем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
  editPopup.removeEventListener('click', closePopupByOverlayClick); // удаляем "слушатель", вызывающий функцию closePopupByOverlayClick при клике по оверлею;
}

function openEditPopup() { // объявляем функцию с аргументом, реализующую открытие любого "Попап-окна";
  editPopup.classList.add('popup_active'); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  inputName.value = profileTitle.textContent; // присваиваем полю ввода "Имя" формы "Попап-окна" текстовое содержимое заголовка секции "Профиль";
  inputAbout.value = profileSubtitle.textContent; // присваиваем полю ввода "О себе" формы "Попап-окна" текстовое содержимое подзаголовка секции "Профиль";
  resetInputValidState(inputs); // вызываем функцию, сбрасывающую ошибочное состояние полей ввода;
  resetInputErrors(inputErrors); // объявляем функцию, сбрасывающего ошибки полей;
  setSubmitButton(editPopup); // вызываем функцию setSubmitButton для валидации полей при открытии попапа;

  editPopup.addEventListener('click', closePopupByOverlayClick); // подключаем слушатель, реализующий закрытие попап-окон при клике по оверлею;
  overlay.addEventListener('keydown', handleKeydown); // подключаем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
}

function handleFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  profileTitle.textContent = inputName.value; // заменяем текстовое содержимое заголовка секции "Профиль" значением поля ввода "Имя" формы "Попап-окна";
  profileSubtitle.textContent = inputAbout.value; // заменяем текстовое содержимое подзаголовка секции "Профиль" значением поля ввода "О себе" формы "Попап-окна";
  сloseEditPopup(); // реализуем автоматическое закрытие "Попап-окна";
}

const card = new Card(initialCards, '.card'); // записываем в переменную экземпляр класса Card (новых карточек);
card.render(document.querySelector('.cards-container')); // с помощью метода класса отрисовываем карточки в указанном блоке;

addButton.addEventListener('click', card.openAddCardPopup); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
closeButtonAddElementPopup.addEventListener('click', () => card.closePopup(Card._addCardPopup));// подключаем "слушатель", реализующую закрытие попапапри "Добавить элемент" при нажатии на кнопку;
editButton.addEventListener('click', openEditPopup); // подключаем "слушатель", вызывающий функцию openEditPopup при нажатии на кнопку "Войти";
closeButton.addEventListener('click', сloseEditPopup); // подключаем "слушатель", вызывающий функцию "сloseEditPopup" при нажатии на кнопку "Закрыть";
form.addEventListener('submit', handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";