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
const overlay = document.querySelector('.project-area'); // выбираем в проекте класс тега <body>;
const popups = document.querySelectorAll('.popup'); // выбираем в проекте класс всех попап-окон;
const addPopupForm = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте класс формы в "Попап-окне" добавления нового элемента;
const inputErrors = document.querySelectorAll('.popup__input-error'); // выбираем в проекте все элементы ошибки поля ввода;
const inputs = document.querySelectorAll('.popup__input'); // выбираем в проекте все поля ввода;

function resetInputErrors() { // объявляем функцию, сбрасывающего ошибки полей;
inputErrors.forEach(item => { // в каждом элементе ошибки поля ввода
  item.textContent = ''; // заменяем текстовое содержимое на пустую строку;
});
}

function resetInputValidState() { // объявляем функцию, сбрасывающую ошибочное состояние полей ввода;
inputs.forEach(item => { // у каждого поля ввода
item.classList.remove('popup__input_state_invalid'); // удаляем соответствующий класс ошибочного состояния;
});
}

function сlosePopup(item) { // объявляем функцию с аргументами, реализующую закрытие любого "Попап-окна";
  item.classList.remove('popup_active'); // удаляем у класса "Попап-окна" модификатор, реализующий видимость блока;
  overlay.removeEventListener('keydown', handleKeydown); // удаляем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
}

function handleKeydown(evt) { // объявляем функцию, реализующую закрытие любого "Попап-окна" при нажатии клавиши "Esc";
  if (evt.key === 'Escape') { // если нажата клавиша Esc -
    popups.forEach(item => { // для каждого попап-окна
      сlosePopup(item); // вызываем функцию сlosePopup;
    });
  }
}

function composeEventListener() { // объявляем функцию, реализующую добавление "слушателя", вызывающего функцию сlosePopup при клике по оверлею, всем "Попап-окнам";
popups.forEach(item => { // каждому попап-окну
  item.addEventListener('click', evt => { // добавляем слушатель, который при клике,
    if (evt.target.classList.contains('popup__container') || // если класс элемента, по которому кликнули, "popup__container"
      evt.target.classList.contains('popup')) { // или "popup"
        сlosePopup(item); // вызывает функцию сlosePopup;
      }
  }); 
});
}

function openPopup(item) { // объявляем функцию с аргументом, реализующую открытие любого "Попап-окна";
  item.classList.add('popup_active'); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  overlay.addEventListener('keydown', handleKeydown); // подключаем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
  resetInputValidState(); // вызываем функцию, сбрасывающую ошибочное состояние полей ввода;
  resetInputErrors(); // объявляем функцию, сбрасывающего ошибки полей;
  composeEventListener(); // вызываем функцию, реализующую закрытие попап-окон при клике по оверлею;
}

function openEditPopup() { // объявляем функцию, реализующую открытие "Попап-окна";
  openPopup(popup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  inputName.value = profileTitle.textContent; // присваиваем полю ввода "Имя" формы "Попап-окна" текстовое содержимое заголовка секции "Профиль";
  inputAbout.value = profileSubtitle.textContent; // присваиваем полю ввода "О себе" формы "Попап-окна" текстовое содержимое подзаголовка секции "Профиль";
  enableValidation(validationConfig);
}

function openAddElementPopup() { // объявляем функцию, реализующую открытие "Попап-окна";  
  openPopup(addElementPopup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
   
  addPopupForm.reset(); // удаляем данные  формы при открытии попапа;
  inputTitle.placeholder = 'Название'; // присваиваем полям ввода "подсказки" при открытии попапа;
  inputLink.placeholder = 'Ссылка на картинку';
  enableValidation(validationConfig); // вызываем функцию enableValidation с аргументом в виде объекта с настройками форм для валидации полей при открытии попапа;
}

function openImagePopup(evt) { // объявляем функцию, реализующую открытие попап-окна для просмотра выбранного изображения;
  const captionValue = evt.target.closest('.element'); // присваиваем переменной класс карточки, по изображению которой кликнул пользователь;
  openPopup(imagePopup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  photoImagePopup.src = evt.target.src; // присваиваем атрибуту изображения попап-окна значение атрибута выбранного изображения карточки;
  captionImagePopup.textContent = captionValue.textContent; // присваиваем текстовому содержимому подписи к изображению попап-окна текстовое содержимое заголовка выбранной карточки;
}

function handleFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  profileTitle.textContent = inputName.value; // заменяем текстовое содержимое заголовка секции "Профиль" значением поля ввода "Имя" формы "Попап-окна";
  profileSubtitle.textContent = inputAbout.value; // заменяем текстовое содержимое подзаголовка секции "Профиль" значением поля ввода "О себе" формы "Попап-окна";
  сlosePopup(popup); // реализуем автоматическое закрытие "Попап-окна";
}

function handleAddElementFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и создание новой карточки;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  const NewCardTitle = inputTitle.value; // присваиваем переменной значение, введенноё пользователем в поле "Название";
  const NewCardLink = inputLink.value; // присваиваем переменной значение, введенноё пользователем в поле "Ссылка";
  const NewElement = composeCard({ name: NewCardTitle, link: NewCardLink }); // присваиваем переменной значение новой сформированной карточки;
  cardsContainer.prepend(NewElement); // вставляем новую карточку в начало списка;
  сlosePopup(addElementPopup); // закрываем попап-окно;
}

function removeCard(evt) { // объявляем функцию, реализующую удаление карточки из списка;
  const targetElement = evt.target.closest('.element'); // присваиваем переменной класс карточки, по кнопке удаления которой кликнул пользователь;
  const imageCard = targetElement.querySelector('.element__image'); // присваиваем переменной класс узла "Изображение карточки";
  const removeButton = targetElement.querySelector('.element__remove-button'); // присваиваем переменной класс узла "Кнопка удаления карточки";
  const likeButton = targetElement.querySelector('.element__button'); // присваиваем переменной класс узла "Кнопка Лайк";
  imageCard.removeEventListener('click', openImagePopup); // снимаем "слушатель", вызывающий функцию "openImagePopup" при нажатии на изображение карточки;
  removeButton.removeEventListener('click', removeCard); // снимаем "слушатель", вызывающий функцию "removeCard" при нажатии на кнопку "Удалить карточку";
  likeButton.removeEventListener('click', changeLikeButtonColor); // снимаем "слушатель", вызывающий функцию "changeLikeButtonColor" при нажатии на кнопку "Лайк";
  targetElement.remove(); // удаляем карточку, по кнопке которой кликнул пользователь;
}

function changeLikeButtonColor(evt) { // объявляем функцию, реализующую нажатие кнопки "Лайк" выбранного изображения;
  evt.target.classList.toggle('element__button_active'); // добавляем классу кнопки "Лайк" модификатор, реализующий изменение цвета кнопки по клику пользователя;
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

composeListCard(); // вызываем функцию для формирования карточек при загрузке страницы;

addButton.addEventListener('click', () => enableValidation(validationConfig));
addButton.addEventListener('click', openAddElementPopup); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
closeButtonAddElementPopup.addEventListener('click', () => сlosePopup(addElementPopup)); // подключаем "слушатель", вызывающий функцию "сlosePopup" при нажатии на кнопку "Закрыть";
newElementForm.addEventListener('submit', handleAddElementFormSubmit); // подключаем "слушатель", вызывающий функцию handleAddElementFormSubmit при нажатии на кнопку "Создать";
closeButtonImagePopup.addEventListener('click', () => сlosePopup(imagePopup)); // подключаем "слушатель", вызывающий функцию "сlosePopup" при нажатии на кнопку "Закрыть";
editButton.addEventListener('click', openEditPopup); // подключаем "слушатель", вызывающий функцию openClosePopup при нажатии на кнопку "Войти";
closeButton.addEventListener('click', () => сlosePopup(popup)); // подключаем "слушатель", вызывающий функцию "сlosePopup" при нажатии на кнопку "Закрыть";
form.addEventListener('submit', handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";