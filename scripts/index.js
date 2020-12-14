const editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти";
const closeButton = document.querySelector('.popup__button-close'); // выбираем в проекте класс кнопки "Закрыть";
const popup = document.querySelector('.popup'); // выбираем в проекте класс "Попап-окна";
const form = document.querySelector('.popup__form'); // выбираем в проекте класс формы в "Попап-окне";
const inputName = form.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
const inputAbout = form.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне";
const profileTitle = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль";
const profileSubtitle = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль";
const templateElement = document.querySelector('.card'); // выбираем в проекте класс шаблона секции изображений;
const cardsContainer = document.querySelector('.elements'); // выбираем класс списка изображений в шаблоне;
const addButton = document.querySelector('.profile__add-button'); // выбираем в проекте класс кнопки "Добавить";
const addElementPopup = document.querySelector('.popup_content_add-element'); // выбираем в проекте модификатор "Попап-окна";
const closeButtonAddElementPopup = document.querySelector('.popup__button-close_place_add-element'); // выбираем в проекте модификатор кнопки "Закрыть";
const inputTitle = document.querySelector('.popup__input_data_title'); // выбираем в проекте класс поля ввода "Название" формы в попап-окне "Добавить элемент";
const inputLink = document.querySelector('.popup__input_data_link'); // выбираем в проекте класс второго поля ввода "Ссылка" формы в попап-окне "Добавить элемент";
const newElementForm = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте модификатор формы в "Попап-окне";
const imagePopup = document.querySelector('.popup_place_image-popup'); // выбираем в проекте класс "Попап-окна";
const photoImagePopup = document.querySelector('.popup__image'); // выбираем в проекте класс изображения "Попап-окна";
const captionImagePopup = document.querySelector('.popup__caption'); // выбираем в проекте класс подписи к изображению "Попап-окна";
const closeButtonImagePopup = document.querySelector('.popup__button-close_place_image-popup'); // выбираем в проекте класс кнопки "Закрыть";

const initialCards = [ // присваиваем переменной массив, содержащий объекты с данными, необходимыми для формирования карточек с изображением;
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

function openPopup(item) { // объявляем функцию с аргументом, реализующую открытие любого "Попап-окна";
  item.classList.add('popup_active'); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
}

function сlosePopup(item) { // объявляем функцию с аргументами, реализующую закрытие любого "Попап-окна";
  item.classList.remove('popup_active'); // удаляем у класса "Попап-окна" модификатор, реализующий видимость блока;
}

function openEditPopup() { // объявляем функцию, реализующую открытие "Попап-окна";
  openPopup(popup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  inputName.value = profileTitle.textContent; // присваиваем полю ввода "Имя" формы "Попап-окна" текстовое содержимое заголовка секции "Профиль";
  inputAbout.value = profileSubtitle.textContent; // присваиваем полю ввода "О себе" формы "Попап-окна" текстовое содержимое подзаголовка секции "Профиль";
}

function openAddElementPopup() { // объявляем функцию, реализующую открытие "Попап-окна";
  openPopup(addElementPopup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  inputTitle.value = ''; // присваиваем полям ввода пустую строку при открытии попапа;
  inputLink.value = '';
  inputTitle.placeholder = 'Название'; // присваиваем полям ввода "подсказки" при открытии попапа;
  inputLink.placeholder = 'Ссылка на картинку';
}

function handleFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  profileTitle.textContent = inputName.value; // заменяем текстовое содержимое заголовка секции "Профиль" значением поля ввода "Имя" формы "Попап-окна";
  profileSubtitle.textContent = inputAbout.value; // заменяем текстовое содержимое подзаголовка секции "Профиль" значением поля ввода "О себе" формы "Попап-окна";
  сlosePopup(popup); // реализуем автоматическое закрытие "Попап-окна";
}

function composeCard(item) { // объявляем функцию, формирующую из шаблона в проекте стандарную карточку с изображением, подписью и кнопками;
  const card = templateElement.content.cloneNode(true); // клонируем содержимое шаблона в проекте;
  const headerCard = card.querySelector('.element__title'); // присваиваем переменной класс узла "Заголовок карточки";
  const imageCard = card.querySelector('.element__image'); // присваиваем переменной класс узла "Изображение карточки";
  const removeButton = card.querySelector('.element__remove-button'); // присваиваем переменной класс узла "Кнопка удаления карточки";
  const likeButton = card.querySelector('.element__button'); // присваиваем переменной класс узла "Кнопка Лайк";
  likeButton.addEventListener('click', changeLikeButtonColor); // подключаем "слушатель", вызывающий функцию "changeLikeButtonColor" при нажатии на кнопку "Лайк";
  removeButton.addEventListener('click', removeCard); // подключаем "слушатель", вызывающий функцию "removeCard" при нажатии на кнопку "Удалить карточку";
  headerCard.textContent = item.name; // присваиваем текстовому содержимому узла "Заголовок карточки" значение ключа "Имя" из заданного массива;
  imageCard.src = item.link; // присваиваем атрибуту узла "Изображение карточки" значение ключа "Ссылка" из заданного массива;
  imageCard.alt = item.name; // присваиваем атрибуту узла "Изображение карточки" значение ключа "Имя" из заданного массива;
  imageCard.addEventListener('click', openImagePopup); // подключаем "слушатель", вызывающий функцию "openImagePopup" при нажатии на изображение карточки;
  return card; // возвращаем в функцию значение сформированной карточки;
}

function composeListCard() { // объявляем функцию, формирующую из заданного массива список карточек с изображением, подписью и кнопками;
  const listCards = initialCards.map(composeCard); // присваиваем переменной массив, сформированный из исходного массива и преобразованный с помощью функции "composeCard";
  cardsContainer.append(...listCards); // вставляем в проект полученный массив и раскладываем его на аргументы;
}

function removeCard(evt) { // объявляем функцию, реализующую удаление карточки из списка;
  const targetElement = evt.target.closest('.element'); // присваиваем переменной класс карточки, по кнопке удаления которой кликнул пользователь;
  targetElement.removeEventListener('click', openImagePopup);
  targetElement.remove(); // удаляем карточку, по кнопке которой кликнул пользователь;
}

function handleAddElementFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и создание новой карточки;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  const NewCardTitle = inputTitle.value; // присваиваем переменной значение, введенноё пользователем в поле "Название";
  const NewCardLink = inputLink.value; // присваиваем переменной значение, введенноё пользователем в поле "Ссылка";
  const NewElement = composeCard({ name: NewCardTitle, link: NewCardLink }); // присваиваем переменной значение новой сформированной карточки;
  cardsContainer.prepend(NewElement); // вставляем новую карточку в начало списка;
  сlosePopup(addElementPopup); // закрываем попап-окно;
}

function openImagePopup(evt) { // объявляем функцию, реализующую открытие попап-окна для просмотра выбранного изображения;
  const captionValue = evt.target.closest('.element'); // присваиваем переменной класс карточки, по изображению которой кликнул пользователь;
  openPopup(imagePopup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  photoImagePopup.src = evt.target.src; // присваиваем атрибуту изображения попап-окна значение атрибута выбранного изображения карточки;
  captionImagePopup.textContent = captionValue.textContent; // присваиваем текстовому содержимому подписи к изображению попап-окна текстовое содержимое заголовка выбранной карточки;
}

function changeLikeButtonColor(evt) { // объявляем функцию, реализующую нажатие кнопки "Лайк" выбранного изображения;
  evt.target.classList.toggle('element__button_active'); // добавляем классу кнопки "Лайк" модификатор, реализующий изменение цвета кнопки по клику пользователя;
}

composeListCard(); // вызываем функцию для формирования карточек при загрузке страницы;

addButton.addEventListener('click', openAddElementPopup); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
closeButtonAddElementPopup.addEventListener('click', () => сlosePopup(addElementPopup)); // подключаем "слушатель", вызывающий функцию "сlosePopup" при нажатии на кнопку "Закрыть";
newElementForm.addEventListener('submit', handleAddElementFormSubmit); // подключаем "слушатель", вызывающий функцию handleAddElementFormSubmit при нажатии на кнопку "Создать";
closeButtonImagePopup.addEventListener('click', () => сlosePopup(imagePopup)); // подключаем "слушатель", вызывающий функцию "сlosePopup" при нажатии на кнопку "Закрыть";
editButton.addEventListener('click', openEditPopup); // подключаем "слушатель", вызывающий функцию openClosePopup при нажатии на кнопку "Войти";
closeButton.addEventListener('click', () => сlosePopup(popup)); // подключаем "слушатель", вызывающий функцию "сlosePopup" при нажатии на кнопку "Закрыть";
form.addEventListener('submit', handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";