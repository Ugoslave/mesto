let EditButton = document.querySelector('.profile__edit-button');
let CloseButton = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let inputName = form.querySelector('.popup__input-name');
let inputAbout = form.querySelector('.popup__input-about-yourself');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function openClosePopup() {
  popup.classList.toggle('popup_active');
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
}

EditButton.addEventListener('click', openClosePopup);
CloseButton.addEventListener('click', openClosePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  openClosePopup();
}

form.addEventListener('submit', handleFormSubmit);