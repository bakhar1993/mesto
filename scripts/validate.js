// запуск валидации
function enableValidation(data){
   // выбрать все формы на странице
  const formList = Array.from(document.querySelectorAll(data.formSelector));
  formList.forEach((formElement)=>{
  formElement.addEventListener('submit', (evt)=>{
    evt.preventDefault();
  })
  // добавить полям обработчики
  setEventListeners(formElement,data);
  })
};

//прверка на валидность
function isValid(formElement, inputElement,data){
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage,data);
  }
  else {
    hideImputError(formElement,inputElement,data);
  }
}

//показать ошибку
function showInputError(formElement,inputElement,messageErr,data) {
  inputElement.classList.add(data.inputErrorClass);
  const inputError = formElement.querySelector(`.${inputElement.id}-error`);
  inputError.textContent =messageErr;
}
//скрыть ошибку
function hideImputError(formElement,inputElement,data) {
  inputElement.classList.remove(data.inputErrorClass);
  const inputError = formElement.querySelector(`.${inputElement.id}-error`);
  inputError.textContent = '';
}

//добавляем обработчик всем полям ввода
function setEventListeners(formElement,data) {
  const submitButton = formElement.querySelector(data.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
  toggleButtonState(inputList,submitButton,data);
  inputList.forEach((inputElement)=>{
    inputElement.addEventListener('input',()=>{
      isValid(formElement, inputElement,data);
      toggleButtonState(inputList,submitButton,data);
      });
  })
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid;
  })
}

function  toggleButtonState(inputList,submitButton,data){
  if(hasInvalidInput(inputList)){
  submitButton.classList.add(data.inactiveButtonClass);
  submitButton.setAttribute('disabled','true');
  }
  else{
    submitButton.classList.remove(data.inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
});