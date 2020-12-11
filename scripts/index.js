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

function сlosePopup(item) { // объявляем функцию, реализующую закрытие "Попап-окна";
  item.classList.remove('popup_active'); // удаляем у класса "Попап-окна" модификатор, реализующий видимость блока;
}

function handleFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  profileTitle.textContent = inputName.value; // заменяем текстовое содержимое заголовка секции "Профиль" значением поля ввода "Имя" формы "Попап-окна";
  profileSubtitle.textContent = inputAbout.value; // заменяем текстовое содержимое подзаголовка секции "Профиль" значением поля ввода "О себе" формы "Попап-окна";
  сlosePopup(popup); // реализуем автоматическое закрытие "Попап-окна";
}

editButton.addEventListener('click', openPopup); // подключаем "слушатель", вызывающий функцию openClosePopup, на кнопку "Войти";
closeButton.addEventListener('click', сlosePopup.bind(this, popup)); // подключаем "слушатель", вызывающий функцию openClosePopup, на кнопку "Закрыть";
form.addEventListener('submit', handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить", на форму "Попап-окна";


//ПРОБУЕМ ПОНЯТЬ И СДЕЛАТЬ ХОТЬ ЧТО-ТО!!!!!// 


const initialCards = [
  {
    name: 'Индонезия',
    link: 'https://images.unsplash.com/photo-1604999286549-9775ca576cd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Италия',
    link: 'https://images.unsplash.com/photo-1605609476793-3015923b4be1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=613&q=80'
  },
  {
    name: 'Бельгия',
    link: 'https://images.unsplash.com/photo-1605695497065-825816481772?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Новая Зеландия',
    link: 'https://images.unsplash.com/photo-1590002893558-64f0d58dcca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Уругвай',
    link: 'https://images.unsplash.com/photo-1603229076753-cfac689136c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
  },
  {
    name: 'Фарерские острова',
    link: 'https://images.unsplash.com/photo-1603104144902-8a46f21ca4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
  }
];

const templateElement = document.querySelector('.card');
const cardsContainer = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const addElementPopup = document.querySelector('.popup_content_add-element');
const closeButtonAddElementPopup = document.querySelector('.popup__button-close_place_add-element');
const inputTitle = document.querySelector('.popup__input_data_title'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
const inputLink = document.querySelector('.popup__input_data_link'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
const newElementForm = document.querySelector('.popup__form_place_add-element');
const removeButton = document.querySelector('.element__remove-button');


function composeCard(item) {
  const card = templateElement.content.cloneNode(true);
  const headerCard = card.querySelector('.element__title');
  const imageCard = card.querySelector('.element__image');
  /*removeButton.addEventListener('click', removeCard);*/
  
  headerCard.textContent = item.name;
  imageCard.src = item.link;

  return card;
}

function composeListCard() {
  const listCards = initialCards.map(composeCard);
  cardsContainer.append(...listCards);
}

function removeCard(evt) {
  const targetElement = evt.target.closest('.element');
  targetElement.remove();
}

composeListCard();










/*function openAddElementPopup() { // объявляем функцию, реализующую открытие "Попап-окна";
  addElementPopup.classList.add('popup_active'); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  inputTitle.value = '';
  inputLink.value = '';
  inputTitle.placeholder = 'Название';
  inputLink.placeholder = 'Ссылка на картинку';
}

function handleAddElementFormSubmit(evt) {
  evt.preventDefault(); // отменяем стандартную отправку формы;
  const NewCardTitle = inputTitle.value;
  const NewCardLink = inputLink.value;
  const NewElement = composeCard({ name: NewCardTitle, link: NewCardLink });
  cardsContainer.prepend(NewElement);
  сlosePopup(addElementPopup);
}*/


/*addButton.addEventListener('click', openAddElementPopup);
closeButtonAddElementPopup.addEventListener('click', сlosePopup.bind(this, addElementPopup));
newElementForm.addEventListener('submit', handleAddElementFormSubmit);*/
