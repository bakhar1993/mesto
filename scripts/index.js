import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import {
  initialCards, photoGrid, profileEditButton, popupCloseButton, profileAddButton, popupCardsAddCloseButton,
  popupFormCardsAdd, formEditProfile, popupPicCloseButton, popupAdd,
  dataCard, placeInput, linkInput, jobInput, nameInput,
  profileJob, profileName, popupEdit, data, popupPic,
  pictureOpen, titlePictureOpen
} from './constans.js';
import { closePopup, openPopup } from './utils.js';

initialCardsAdd(initialCards);

const profileEditValidate = new FormValidator(data, formEditProfile);
profileEditValidate.enableValidation();
const cardAddValidate = new FormValidator(data, popupFormCardsAdd);
cardAddValidate.enableValidation();

//отправить форму профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

// кнопка редактировать профиль
function editProfile() {  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
  profileEditValidate.resetFormError();
}

//кнопка добавить
function addCards() {
  popupFormCardsAdd.reset();  
  cardAddValidate.resetFormError();
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
  const card = new Card(item, '#photo-grid__card',handleCardClick);
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

//открытие картинки
function handleCardClick(name, link) {
  openPopup(popupPic);
  pictureOpen.src = link;
  pictureOpen.alt = name;
  titlePictureOpen.textContent = name;
}

//события
profileEditButton.addEventListener('click', editProfile);
popupCloseButton.addEventListener('mousedown', () => { closePopup(popupEdit) });
profileAddButton.addEventListener('click', () => { addCards() });
popupCardsAddCloseButton.addEventListener('click', () => { closePopup(popupAdd) });
popupFormCardsAdd.addEventListener('submit', handleCardsSubmit);
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
popupPicCloseButton.addEventListener('mousedown', () => { closePopup(popupPic) });