export class FormValidator {
  
  constructor(config, form) {
    this._form = document.querySelector(form);
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }
  
  _showError() { // реализуем функцию, выводящую ошибку при невалидном поле ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек;
    const error = this._form.querySelector(`#${this._input.id}-error`); // присваиваем переменной идентификатор текстового контейнера соответсвующего поля ввода формы;
    error.textContent = this._input.validationMessage; // присваиваем текстовому содержимому  найденного контейнера текст стандартной ошибки поля ввода;
    this._input.classList.add(this._inputErrorClass); // добавляем полю ввода соответствующий класс, используемый при ошибке;
  }
  
  _hideError() { // реализуем функцию, скрывающую ошибку при валидном поле ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек;
    const error = this._form.querySelector(`#${this._input.id}-error`); // присваиваем переменной идентификатор текстового контейнера соответсвующего поля ввода формы;
    error.textContent = ''; // присваиваем текстовому содержимому  найденного контейнера пустую строку;
    this._input.classList.remove(this._inputErrorClass); // удаляем у поля ввода соответствующий класс, используемый при ошибке;
  }

  _checkInputValidity(input) { // реализуем функцию, проверяющую валидность поля ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек;
    this._input = input;
    if(this._input.validity.valid) { // если поле ввода валидно - 
      this._hideError(); // вызываем функцию hideError, 
    } else { // если нет -
      this._showError(); // вызываем функцию showError;
    }
  }

  _setButtonState(isActive) { // реализуем функцию, переключающую состояние кнопки отправки формы, с тремя параметрами: класс кнопки, состояние кнопки, объект настроек;
    
    if (isActive) { // если кнопка активна - 
      this._submitButton.classList.remove(this._inactiveButtonClass); // удаляем у кнопки соответствующий класс, используемый при ошибке,
      this._submitButton.disabled = false; // изменяем у кнопки соответствующий атрибут;
    } else { // если кнопка неактивна - 
      this._submitButton.classList.add(this._inactiveButtonClass); // добавляем кнопке соответствующий класс, используемый при ошибке,
      this._submitButton.disabled = true; // изменяем у кнопки соответствующий атрибут (делаем неактивной);
    }
  }
  
  _setEventListener() { // реализуем функцию, добавляющую "слушатель" события "input" всем полям ввода формы, с двумя параметрами: класс формы, объект настроек;
    this._inputList = this._form.querySelectorAll(this._inputSelector); // формируем из полей вода Node List;

    this._inputList.forEach(input => { // перебираем поля ввода формы,
      input.addEventListener('input', () => { // каждому полю ввода добавляем "слушатель" события "input",
      this._checkInputValidity(input); // проверяем валидность каждого поля ввода,
      this._setButtonState(this._form.checkValidity()); // переключаем состояние кнопки отправки формы в зависимости от валидности формы;
      });
    });
  }

  enableValidation() { // реализуем функцию, осуществляющую проверку всех форм проекта;
    this._forms = document.querySelectorAll(this._formSelector); // формируем из форм проекта Node List;
  
    this._forms.forEach(() => { // перебираем формы,
      this._setEventListener(); // вызываем функцию setEventListener,
      this._form.addEventListener('submit', (evt) => { // каждой форме добавляем "слушатель" события "submit",
        evt.preventDefault(); // отменяем стандартную отправку формы,
      });
    
      this._setButtonState(this._form.checkValidity()); // вызываем функцию setButtonState;
    });
  }
}