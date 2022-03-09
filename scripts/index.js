import { Card } from './cards.js';
import { FormValidator } from './FormValidator.js';
import {
  initialCards, photoGrid, profileEditButton, popupCloseButton, profileAddButton, popupCardsAddCloseButton,
  popupFormCardsAdd, formEditProfile, popupPicCloseButton, popupAdd,
  dataCard, placeInput, linkInput, jobInput, nameInput,
  profileJob, profileName, popupEdit, data, popupPic
} from './constans.js';
import { closePopup, openPopup } from './utils.js';

initialCardsAdd(initialCards);

const profileEditValidate = new FormValidator(data, formEditProfile);
const cardAddValidate = new FormValidator(data, popupFormCardsAdd);

//отправить форму профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

// кнопка редактировать профиль
function editProfile() {
  profileEditValidate.enableValidation();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
  profileEditValidate.formErrorReset();
}

//кнопка добавить
function addCards() {
  popupFormCardsAdd.reset();
  cardAddValidate.enableValidation();
  cardAddValidate.formErrorReset();
  openPopup(popupAdd);
  cardAddValidate.toggleButtonState()
}

//отправка card
function handleCardsSubmit(evt) {
  evt.preventDefault();
  dataCard.name = placeInput.value;
  dataCard.link = linkInput.value;
  renderCard(dataCard);
  closePopup(popupAdd);
}

//Создание карточки
function createCards(item) {
  const card = new Card(item, '#photo-grid__card');
  return card.generateCards()
}

//Добавление карточки на страницу
function renderCard(item) {
  photoGrid.prepend(createCards(item));
}

//фото при загрузке страницы
function initialCardsAdd(arr) {
  arr.forEach(function (item) {
    renderCard(item);
  })
}

//события
profileEditButton.addEventListener('click', editProfile);
popupCloseButton.addEventListener('click', () => { closePopup(popupEdit) });
profileAddButton.addEventListener('click', () => { addCards() });
popupCardsAddCloseButton.addEventListener('click', () => { closePopup(popupAdd) });
popupFormCardsAdd.addEventListener('submit', handleCardsSubmit);
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
popupPicCloseButton.addEventListener('click', () => { closePopup(popupPic) });