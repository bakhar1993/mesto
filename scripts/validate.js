const data = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

function enableValidation(data){
   // выбрать все формы на странице
  const formList = Array.from(document.querySelectorAll(data.formSelector));
  formList.forEach((formElement)=>{
  formElement.addEventListener('submit', (evt)=>{
    evt.preventDefault();
  })
  // добавить полям обработчики
  setEventListeners(formElement);
  })
};

//прверка на валидность
function isValid(formElement, inputElement){
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideImputError(formElement,inputElement);
  }
}

//показать ошибку
function showInputError(formElement,inputElement,messageErr) {
  inputElement.classList.add(data.inputErrorClass);
  const inputError = formElement.querySelector(`.${inputElement.id}-error`);
  inputError.textContent =messageErr;
}
//скрыть ошибку
function hideImputError(formElement,inputElement) {
  inputElement.classList.remove(data.inputErrorClass);
  const inputError = formElement.querySelector(`.${inputElement.id}-error`);
  inputError.textContent = '';
}

//добавляем обработчик всем полям ввода
function setEventListeners(formElement) {
  const submitButton = formElement.querySelector(data.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
  toggleButtonState(inputList,submitButton);
  inputList.forEach((inputElement)=>{
    inputElement.addEventListener('input',()=>{
      isValid(formElement, inputElement);
      toggleButtonState(inputList,submitButton);
      });
  })
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid;
  })
}

function  toggleButtonState(inputList,submitButton){
  if(hasInvalidInput(inputList)){
  submitButton.classList.add(data.inactiveButtonClass);
  submitButton.setAttribute('disabled','true');
  }
  else{
    submitButton.classList.remove(data.inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  }
}

enableValidation(data);