export const setSubmitButton = () => { // реализуем функцию, переключающую состояние кнопки отправки формы;
  const activeForm = document.querySelector('.popup_active').querySelector('.popup__form'); // выбираем в активном попап-окне форму;
  const submitButton = document.querySelector('.popup_active').querySelector('.popup__button-save'); // выбираем в активном попап-окне кнопку отправки формы;

  if (!activeForm.checkValidity()) {  // если форма не валидна - 
  submitButton.classList.add('popup__button-save_state_invalid'); // добавляем кнопке соответствующий класс, используемый при ошибке,
  submitButton.disabled = true; // изменяем у кнопки соответствующий атрибут (делаем неактивной);
  } else { // если форма валидна -
    submitButton.classList.remove('popup__button-save_state_invalid'); // удаляем у кнопки соответствующий класс, используемый при ошибке,
    submitButton.disabled = false; // изменяем у кнопки соответствующий атрибут (делаем активной);
  }
}