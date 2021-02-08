export class FormValidator {
  
  constructor(config, form) {
    this._form = document.querySelector(form);
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._inputList = this._form.querySelectorAll(this._inputSelector); // формируем из полей вода Node List;
  }
  
  _showError(input) { // реализуем метод класса, выводящий ошибку при невалидном поле ввода формы;
    const error = this._form.querySelector(`#${input.id}-error`); // присваиваем переменной идентификатор текстового контейнера соответсвующего поля ввода формы;
    error.textContent = input.validationMessage; // присваиваем текстовому содержимому  найденного контейнера текст стандартной ошибки поля ввода;
    input.classList.add(this._inputErrorClass); // добавляем полю ввода соответствующий класс, используемый при ошибке;
  }
  
  _hideError(input) { // реализуем метод класаа, скрывающий ошибку при валидном поле ввода формы;
    const error = this._form.querySelector(`#${input.id}-error`); // присваиваем переменной идентификатор текстового контейнера соответсвующего поля ввода формы;
    error.textContent = ''; // присваиваем текстовому содержимому  найденного контейнера пустую строку;
    input.classList.remove(this._inputErrorClass); // удаляем у поля ввода соответствующий класс, используемый при ошибке;
  }

  _checkInputValidity(input) { // реализуем метод класса, проверяющий валидность поля ввода формы;
  
    if(input.validity.valid) { // если поле ввода валидно - 
      this._hideError(input); // вызываем метод hideError, 
    } else { // если нет -
      this._showError(input); // вызываем метод showError;
    }
  }

  setButtonState(isActive) { // реализуем метод класса, переключающий состояние кнопки отправки формы;
    
    if (isActive) { // если кнопка активна - 
      this._submitButton.classList.remove(this._inactiveButtonClass); // удаляем у кнопки соответствующий класс, используемый при ошибке,
      this._submitButton.disabled = false; // изменяем у кнопки соответствующий атрибут;
    } else { // если кнопка неактивна - 
      this._submitButton.classList.add(this._inactiveButtonClass); // добавляем кнопке соответствующий класс, используемый при ошибке,
      this._submitButton.disabled = true; // изменяем у кнопки соответствующий атрибут (делаем неактивной);
    }
  }
  
  _setEventListener() { // реализуем метод класса, добавляющий "слушатель" события "input" всем полям ввода формы;
    this._inputList = this._form.querySelectorAll(this._inputSelector); // формируем из полей вода Node List;

    this._inputList.forEach(input => { // перебираем поля ввода формы,
      input.addEventListener('input', () => { // каждому полю ввода добавляем "слушатель" события "input",
      this._checkInputValidity(input); // проверяем валидность каждого поля ввода,
      this.setButtonState(this._form.checkValidity()); // переключаем состояние кнопки отправки формы в зависимости от валидности формы;
      });
    });
  }

  enableValidation() { // реализуем метод класса, осуществляющий проверку переданной в конструктор формы проекта;
    this._setEventListener(); // вызываем метод setEventListener,
    
    this._form.addEventListener('submit', (evt) => { // форме добавляем "слушатель" события "submit",
        evt.preventDefault(); // отменяем стандартную отправку формы,
      });
    
    this.setButtonState(this._form.checkValidity()); // вызываем метод _setButtonState;
  }
  
  resetInputErrors = () => { // объявляем функцию, сбрасывающую ошибки полей ввода;
    this._inputErrors = this._form.querySelectorAll('.popup__input-error'); // формируем из полей вода Node List;

    this._inputErrors.forEach(item => { // в каждом элементе ошибки поля ввода
      item.textContent = ''; // заменяем текстовое содержимое на пустую строку;
      });
    
    this._inputList.forEach(input => { // у каждого поля ввода
      this._input = input;
      this._hideError(input); // удаляем соответствующий класс ошибочного состояния;
      });
    }
}