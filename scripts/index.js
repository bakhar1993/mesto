const popupEdit = document.querySelector('.popup_type_profile-edit');
const profileEditButton = document.querySelector('.profile__edit-Button');
const popupCloseButton = document.querySelector('.popup__close_type_profile-edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formEditProfile = document.querySelector('.popup__form_type_profile-edit');
const nameInput = document.querySelector('.popup__input_type-name');
const jobInput = document.querySelector('.popup__input_type-job');

const popupAdd = document.querySelector('.popup_type_add-card');
const popupCardsAddButton = document.querySelector('.popup_type_add-card');
const popupCardsAddCloseButton = popupAdd.querySelector('.popup__close_type_add-card');
const popupFormCardsAdd = popupCardsAddButton.querySelector('.popup__form_type_add-card');

const popupCardsSubmitButton = popupAdd.querySelector('.popup__submit_type_add-card');
const profileEditSubmitButton = popupEdit.querySelector('.popup__submit_type_profile-edit')

const inputListPopup = Array.from(document.querySelectorAll('.popup__input'));

const placeInput = popupFormCardsAdd.querySelector('.popup__input_type-place');
const linkInput = popupFormCardsAdd.querySelector('.popup__input_type-link');

const profileAddButton = document.querySelector('.profile__add-Button');
const dataCard = {};
const photoGrid = document.querySelector('.photo-grid');
const gridCardsTemplate = document.querySelector('#photo-grid__card').content;

const popupPic = document.querySelector('.popup_type_open-pic');
const popupPicCloseButton = document.querySelector('.popup__close_type_open-pic');
const pictureOpen = document.querySelector('.popup__pic_type_open-pic');
const titlePictureOpen = document.querySelector('.popup__title_type_open-pic');
const ESC_KEYCODE = 27;

initialCardsAdd(initialCards);

//Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown",closePopupEsc);
  document.addEventListener('mousedown',closeOvarlay);
}

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown",closePopupEsc);
  document.removeEventListener('mousedown',closeOvarlay);
}

function closePopupEsc(evt) {
  if(evt.keyCode === ESC_KEYCODE) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
}
}

function closeOvarlay(evt){
  const popup = document.querySelector('.popup_opened');
  if(evt.target === popup){
    closePopup(popup);
  }
}

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

// //создание карточки
function createCards(item){
  const gridCards = gridCardsTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const likeButton = gridCards.querySelector('.photo-grid__like');
  const deleteButton = gridCards.querySelector('.photo-grid__delete');
  const pictureCards = gridCards.querySelector('.photo-grid__picture');
  const titleCard =gridCards.querySelector('.photo-grid__title');

  pictureCards.src = item.link;
  pictureCards.alt = item.name;
  titleCard.textContent = item.name;  

  pictureCards.addEventListener('click',openPic)
  deleteButton.addEventListener('click',deleteCards)
  likeButton.addEventListener('click',clickLike);
  return gridCards;
} 

function renderCard(item){
  photoGrid.prepend(createCards(item));
}

//фото при загрузке страницы
function initialCardsAdd(arr) {
  arr.forEach(function(item) {
  renderCard(item);
    })
}

//лайк
function clickLike(evt) {
  evt.target.classList.toggle('photo-grid__like_active');
}

//удаление карточки
function deleteCards(evt){
  evt.target.closest('.photo-grid__item').remove();
}

//открытие изображения
function openPic(evt) {
  openPopup(popupPic);
  pictureOpen.src = evt.target.src;
  pictureOpen.alt = evt.target.alt;
  titlePictureOpen.textContent = evt.target.alt;
}

//события
profileEditButton.addEventListener('click',editProfile);
popupCloseButton.addEventListener('click',() => {closePopup(popupEdit)});
profileAddButton.addEventListener('click',() => {addCards()});
popupCardsAddCloseButton.addEventListener('click',() => {closePopup(popupAdd)});
popupFormCardsAdd.addEventListener('submit',handleCardsSubmit);
formEditProfile.addEventListener('submit',handleProfileFormSubmit);
popupPicCloseButton.addEventListener('click',() => {closePopup(popupPic)});
