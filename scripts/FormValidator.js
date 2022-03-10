export class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._inputSelector = data.inputSelector;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(data.submitButtonSelector);
    this._inputErrorClass = data.inputErrorClass;
    this._inactiveButtonClass = data.inactiveButtonClass;
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
    else {
      this._hideImputError(inputElement);
    }
  }

  _showInputError(inputElement, messageErr) {
    inputElement.classList.add(this._inputErrorClass);
    const inputError = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputError.textContent = messageErr;
  }

  _hideImputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    const inputError = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputError.textContent = '';
  }

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    })
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.setAttribute('disabled', 'true');
    }
    else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    this._setEventListeners();
  };

  resetFormError() {
    this._inputList.forEach((input) => {
      this._hideImputError(input)
    })
  }

}
