import './index.css';

import {addButton, 
        editButton,
        userDataSelector, 
        inputName, 
        inputAbout, 
        avatar, 
        avatarBox, 
        validationConfig, 
        cardsContainer} from '../utils/constants.js'

import {Card} from '../components/card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithDeleteConfirmation} from '../components/PopupWithDeleteConfirmation.js';
import {UserInfo} from '../components/UserInfo.js'; 
import {Api} from '../components/Api.js';

const editformValidation = new FormValidator(validationConfig, '.popup__form');
editformValidation.enableValidation();  // с помощью метода  класса FormValidator 

const addFormValidation = new FormValidator(validationConfig, '.popup__form_place_add-element');
addFormValidation.enableValidation(); // запускаем валидацию указанной формы;

const avatarFormValidation = new FormValidator(validationConfig, '.popup__form_place_avatar-update');
avatarFormValidation.enableValidation(); // запускаем валидацию указанной формы;
 
const userInfo = new UserInfo(userDataSelector);





const popupWithImage = new PopupWithImage('.popup_place_image-popup');
popupWithImage.setEventListeners();

const popupWithAddForm = new PopupWithForm('.popup_content_add-element', saveCardOnServer, handleAddCardForm);
popupWithAddForm.setEventListeners();

const popupWithEditForm = new PopupWithForm('.popup', handleEditFormSubmit, handleOpenProfileForm);
popupWithEditForm.setEventListeners();

const popupWithConfirmation = new PopupWithDeleteConfirmation('.popup_place_remove-confirmation', handleRemoveItemForm);
popupWithConfirmation.setEventListeners();

const popupWithAvatarForm = new PopupWithForm('.popup_content_avatar-update', handleAvatarFormSubmit, handleChangeAvatarForm);
popupWithAvatarForm.setEventListeners();

const api = new Api({ // записываем в переменную экземпляр класса Api;
  url:  "https://mesto.nomoreparties.co/v1/cohort-20", 
  headers: {
    "content-type": "application/json", 
    "authorization": "17a61d6a-801a-4cf0-9a4b-c3020830f258"
  }
});

api.getAllCards() 
  .then(res => {
    const cardList = new Section({items: res, renderer: (item) => {
      const card = new Card(item, '.card', popupWithImage, api, popupWithConfirmation); // записываем в переменную экземпляр класса Card (новых карточек);
      const cardElement = card.renderCard();
      cardList.addItem(cardElement);
      }
    }, cardsContainer);
    
    cardList.renderItems();
  }) 
  .catch(err => console.log(err));


function saveCardOnServer(data) {
  showHandlingProcess(true, '.popup_content_add-element');
  
  api.addCard(data) 
  .then(res => {
    const card = new Card(res, '.card', popupWithImage, api, popupWithConfirmation); // записываем в переменную экземпляр класса Card (новых карточек);
    const element = card.renderCard();
    cardsContainer.prepend(element); // с помощью метода класса отрисовываем карточки в указанном блоке; 
    popupWithAddForm.close();
  }) 
  .catch(err => console.log(err)) 
  .finally(() => showHandlingProcess(false, '.popup_content_add-element', 'Создать'));
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




function handleRemoveItemForm(res) {
  debugger;
  const card = new Card(res, '.card', popupWithImage, api, popupWithConfirmation);
  card._removeCard();
  popupWithConfirmation.close();
}







function handleAvatarFormSubmit(avatarLink) {
  showHandlingProcess(true, '.popup_content_avatar-update');
  api.changeAvatar(avatarLink) 
     .then(res => avatar.src = res.avatar) 
     .catch(err => console.log(err)) 
     .finally(() => showHandlingProcess(false, '.popup_content_avatar-update', 'Сохранить'));

  popupWithAvatarForm.close();
}

function handleChangeAvatarForm() {
  avatarFormValidation.resetInputErrors();
  avatarFormValidation.setButtonState(false);
}

api.getUserData() 
  .then(res => {
    inputName.value = res.name;
    inputAbout.value = res.about;
    userInfo.setUserInfo(res.name, res.about);
    avatar.src = res.avatar;
  }) 
  .catch(err => console.log(err));


function handleEditFormSubmit(newData) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  showHandlingProcess(true, '.popup');
  
  api.changeUserData(newData) 
       .then(res => {
        userInfo.setUserInfo(res.name, res.about)
        }) 
       .catch(err => console.log(err)) 
       .finally(() => showHandlingProcess(false, '.popup', 'Сохранить'));
  
    popupWithEditForm.close(); // реализуем автоматическое закрытие "Попап-окна";
  }

function showHandlingProcess(isLoading, popupSelector, text) {
  const saveButton = document.querySelector(popupSelector).querySelector('.popup__button-save');

  if (isLoading) {
    saveButton.textContent = 'Сохранение...';
  } else {
    saveButton.textContent = text;
  }
}

addButton.addEventListener('click', popupWithAddForm.open); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
editButton.addEventListener('click', popupWithEditForm.open); // подключаем "слушатель", вызывающий функцию openEditPopup при нажатии на кнопку "Войти";
avatarBox.addEventListener('click', popupWithAvatarForm.open);// подключаем "слушатель", открывающий попап при нажатии на кнопку "Аватар";