let popupCloseButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type-name');
let jobInput = document.querySelector('.popup__input_type-job');
let profileEditButton = document.querySelector('.profile__edit-Button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function popupClosed() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClosed();
}

// кнопка редактировать
function profileEddit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}
profileEditButton.addEventListener('click',profileEddit);
popupCloseButton.addEventListener('click',popupClosed);
formElement.addEventListener('submit', formSubmitHandler);