const validationConfig = { // присваиваем переменной объект с настройками формы, значения ключей - необходимые при валидации названия классов;
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_state_invalid',
  inputErrorClass: 'popup__input_state_invalid'
};

function showError(form, input, config) { // реализуем функцию, выводящую ошибку при невалидном поле ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек;
  const error = form.querySelector(`#${input.id}-error`); // присваиваем переменной идентификатор текстового контейнера соответсвующего поля ввода формы;
  error.textContent = input.validationMessage; // присваиваем текстовому содержимому  найденного контейнера текст стандартной ошибки поля ввода;
  input.classList.add(config.inputErrorClass); // добавляем полю ввода соответствующий класс, используемый при ошибке;
}

function hideError(form, input, config) { // реализуем функцию, скрывающую ошибку при валидном поле ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек;
  const error = form.querySelector(`#${input.id}-error`); // присваиваем переменной идентификатор текстового контейнера соответсвующего поля ввода формы;
  error.textContent = ''; // присваиваем текстовому содержимому  найденного контейнера пустую строку;
  input.classList.remove(config.inputErrorClass); // удаляем у поля ввода соответствующий класс, используемый при ошибке;
}

function checkInputValidity(form, input, config) { // реализуем функцию, проверяющую валидность поля ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек;
  if(input.validity.valid) { // если поле ввода валидно - 
    hideError(form, input, config); // вызываем функцию hideError, 
  } else { // если нет -
    showError(form, input, config); // вызываем функцию showError;
  }
}

function setButtonState(button, isActive, config) { // реализуем функцию, переключающую состояние кнопки отправки формы, с тремя параметрами: класс кнопки, состояние кнопки, объект настроек;
  if (isActive) { // если кнопка активна - 
    button.classList.remove(config.inactiveButtonClass); // удаляем у кнопки соответствующий класс, используемый при ошибке,
    button.disabled = false; // изменяем у кнопки соответствующий атрибут;
  } else { // если кнопка неактивна - 
    button.classList.add(config.inactiveButtonClass); // добавляем кнопке соответствующий класс, используемый при ошибке,
    button.disabled = true; // изменяем у кнопки соответствующий атрибут (делаем неактивной);
  }
}

function setEventListener(form, config) { // реализуем функцию, добавляющую "слушатель" события "input" всем полям ввода формы, с двумя параметрами: класс формы, объект настроек;
  const inputList = form.querySelectorAll(config.inputSelector); // формируем из полей вода Node List;
  const submitButton = form.querySelector(config.submitButtonSelector); // присваиваем переменной класс кнопки отправки формы;

  inputList.forEach(input => { // перебираем поля ввода формы,
    input.addEventListener('input', (evt) => { // каждому полю ввода добавляем "слушатель" события "input",
      checkInputValidity(form, input, config); // проверяем валидность каждого поля ввода,
      setButtonState(submitButton, form.checkValidity(), config); // переключаем состояние кнопки отправки формы в зависимости от валидности формы;
    });
  });
}

function enableValidation(config) { // реализуем функцию, осуществляющую проверку всех форм проекта;
  const forms = document.querySelectorAll(config.formSelector); // формируем из форм проекта Node List;
  
  forms.forEach(form => { // перебираем формы,
    setEventListener(form, config); // вызываем функцию setEventListener,
    form.addEventListener('submit', (evt) => { // каждой форме добавляем "слушатель" события "submit",
      evt.preventDefault(); // отменяем стандартную отправку формы,
    });
    
    const submitButton = form.querySelector(config.submitButtonSelector); // присваиваем переменной класс кнопки отправки формы;
    setButtonState(submitButton, form.checkValidity(), config); // вызываем функцию setButtonState;
  });
}

enableValidation(validationConfig); // вызываем функцию enableValidation с аргументом в виде объекта с настройками форм;