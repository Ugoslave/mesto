const addButton = document.querySelector('.profile__add-button'); // выбираем в проекте класс кнопки "Добавить";
const editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти";
const editPopup = document.querySelector('.popup'); // выбираем в проекте класс "Попап-окна";
const profileTitle = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль";
const profileSubtitle = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль";
const addCardPopup = document.querySelector('.popup_content_add-element'); // выбираем в проекте модификатор "Попап-окна";
const imagePopup = document.querySelector('.popup_place_image-popup'); // выбираем в проекте класс "Попап-окна";
const inputTitle = document.querySelector('.popup__input_data_title'); // выбираем в проекте класс поля ввода "Название" формы в попап-окне "Добавить элемент";
const inputLink = document.querySelector('.popup__input_data_link'); // выбираем в проекте класс второго поля ввода "Ссылка" формы в попап-окне "Добавить элемент";
const cardsContainer = document.querySelector('.elements');

const userDataSelector = {
  name: profileTitle, 
  about: profileSubtitle
};

export {addButton, 
        editButton, 
        editPopup,  
        addCardPopup, 
        imagePopup, 
        inputTitle, 
        inputLink, 
        userDataSelector, 
        cardsContainer};