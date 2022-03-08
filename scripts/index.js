import {Card} from './cards.js';
import {initialCards,photoGrid,profileEditButton,popupCloseButton,profileAddButton,popupCardsAddCloseButton,
  popupFormCardsAdd,formEditProfile,popupPicCloseButton,popupAdd,popupCardsSubmitButton,
  dataCard,placeInput,linkInput,inputListPopup,profileEditSubmitButton,jobInput,nameInput,
  profileJob,profileName,popupEdit} from './constans.js';
import {closePopup,openPopup} from './utils.js';

initialCardsAdd(initialCards);

//отправить форму профиля
function handleProfileFormSubmit (evt) {
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
  toggleButtonState(inputListPopup,profileEditSubmitButton);
}

//кнопка добавить
function addCards() {
  popupFormCardsAdd.reset();// поля очищаются, но кнопка активна
  openPopup(popupAdd);
  const inputListPopup = Array.from(popupFormCardsAdd.querySelectorAll('.popup__input'));
// сброс состояния кнопки 
  toggleButtonState(inputListPopup,popupCardsSubmitButton);
  // удаление ошибок в форме
  inputListPopup.forEach((item)=>{
  hideImputError(popupFormCardsAdd,item)})  
}

  //отправка card
function handleCardsSubmit(evt){
  evt.preventDefault();
  dataCard.name = placeInput.value;
  dataCard.link = linkInput.value;
  renderCard(dataCard);  
  // evt.target.reset();
  closePopup(popupAdd);
}

function renderCard(item){
  // Card.createCards();
  const card = new Card(item,'#photo-grid__card')
  photoGrid.prepend(card.createCards());
}

//фото при загрузке страницы
function initialCardsAdd(arr) {
  arr.forEach(function(item) {
const card = new Card(item,'#photo-grid__card');
photoGrid.prepend(card.createCards());
  // renderCard(item);
    })
}

//события
profileEditButton.addEventListener('click',editProfile);
popupCloseButton.addEventListener('click',() => {closePopup(popupEdit)});
profileAddButton.addEventListener('click',() => {addCards()});
popupCardsAddCloseButton.addEventListener('click',() => {closePopup(popupAdd)});
popupFormCardsAdd.addEventListener('submit',handleCardsSubmit);
formEditProfile.addEventListener('submit',handleProfileFormSubmit);
popupPicCloseButton.addEventListener('click',() => {closePopup(popupPic)});