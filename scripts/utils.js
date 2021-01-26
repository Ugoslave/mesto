export function setSubmitButton(item) { // реализуем функцию, переключающую состояние кнопки отправки формы;
  const activeForm = item.querySelector('.popup__form'); // выбираем в активном попап-окне форму;
  const submitButton = item.querySelector('.popup__button-save'); // выбираем в активном попап-окне кнопку отправки формы;

  if (!activeForm.checkValidity()) {  // если форма не валидна - 
  submitButton.classList.add('popup__button-save_state_invalid'); // добавляем кнопке соответствующий класс, используемый при ошибке,
  submitButton.disabled = true; // изменяем у кнопки соответствующий атрибут (делаем неактивной);
  } else { // если форма валидна -
    submitButton.classList.remove('popup__button-save_state_invalid'); // удаляем у кнопки соответствующий класс, используемый при ошибке,
    submitButton.disabled = false; // изменяем у кнопки соответствующий атрибут (делаем активной);
  }
}

export function handleKeydown(evt) { // объявляем функцию, реализующую закрытие любого "Попап-окна" при нажатии клавиши "Esc";
  const activePopup = document.querySelector('.popup_active'); // находим в проекте класс активного попап-окна;
  if (evt.key === 'Escape') { // если нажата клавиша Esc -
    activePopup.classList.remove('popup_active'); // вызываем функцию сlosePopup;
  }
}

export function closePopupByOverlayClick(evt) {
  const activePopup = document.querySelector('.popup_active'); // находим в проекте класс активного попап-окна;
  if (evt.target.classList.contains('popup__container') || // если класс элемента, по которому кликнули, "popup__container"
      evt.target.classList.contains('popup')) { // или "popup" -
      activePopup.classList.remove('popup_active'); // вызывает функцию сlosePopup;
  }
}

export function openPopup(item) { // объявляем функцию с аргументом, реализующую открытие любого "Попап-окна";
item.classList.add('popup_active'); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
}

export function closePopup(item) { // реализуем закрытие попапа добавления новой карточки с помощью метода класса
  item.classList.remove('popup_active');
  item.removeEventListener('keydown', handleKeydown); // удаляем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу ESC;
  item.removeEventListener('click', closePopupByOverlayClick); // удаляем "слушатель" функции, реализующей закрытие попапа при клике по оверлею;
}