let editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти";
let closeButton = document.querySelector('.popup__button-close'); // выбираем в проекте класс кнопки "Закрыть";
let popup = document.querySelector('.popup'); // выбираем в проекте класс "Попап-окна";
let form = document.querySelector('.popup__form'); // выбираем в проекте класс формы в "Попап-окне";
let inputName = form.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
let inputAbout = form.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне";
let profileTitle = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль";
let profileSubtitle = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль";

function openPopup() { // объявляем функцию, реализующую открытие "Попап-окна";
  popup.classList.add('popup_active'); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  inputName.value = profileTitle.textContent; // присваиваем полю ввода "Имя" формы "Попап-окна" текстовое содержимое заголовка секции "Профиль";
  inputAbout.value = profileSubtitle.textContent; // присваиваем полю ввода "О себе" формы "Попап-окна" текстовое содержимое подзаголовка секции "Профиль";
}

function сlosePopup() { // объявляем функцию, реализующую закрытие "Попап-окна";
  popup.classList.remove('popup_active'); // удаляем у класса "Попап-окна" модификатор, реализующий видимость блока;
}

function handleFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  profileTitle.textContent = inputName.value; // заменяем текстовое содержимое заголовка секции "Профиль" значением поля ввода "Имя" формы "Попап-окна";
  profileSubtitle.textContent = inputAbout.value; // заменяем текстовое содержимое подзаголовка секции "Профиль" значением поля ввода "О себе" формы "Попап-окна";
  сlosePopup(); // реализуем автоматическое закрытие "Попап-окна";
}

editButton.addEventListener('click', openPopup); // подключаем "слушатель", вызывающий функцию openClosePopup, на кнопку "Войти";
closeButton.addEventListener('click', сlosePopup); // подключаем "слушатель", вызывающий функцию openClosePopup, на кнопку "Закрыть";
form.addEventListener('submit', handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить", на форму "Попап-окна";