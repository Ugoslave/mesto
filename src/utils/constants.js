const addButton = document.querySelector('.profile__add-button'); // выбираем в проекте класс кнопки "Добавить";
const editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти";
const cardsContainer = document.querySelector('.elements');
const inputName = document.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
const inputAbout = document.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне";

const userDataSelector = {
  name: '.profile__title', 
  about: '.profile__subtitle'
};

const validationConfig = { // присваиваем переменной объект с настройками формы, значения ключей - необходимые при валидации названия классов;
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_state_invalid',
  inputErrorClass: 'popup__input_state_invalid'
};

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

export {addButton, 
        editButton,  
        userDataSelector, 
        inputName, 
        inputAbout, 
        validationConfig, 
        initialCards, 
        cardsContainer};