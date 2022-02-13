const popupEdit = document.querySelector('.popup_type_profile-edit');
const profileEditButton = document.querySelector('.profile__edit-Button');
const popupCloseButton = document.querySelector('.popup__close_type_profile-edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type-name');
const jobInput = document.querySelector('.popup__input_type-job');

const popupAdd = document.querySelector('.popup_type_add-card');
const popupCardsAddButton = document.querySelector('.popup_type_add-card');
const popupCardsAddCloseButton = popupAdd.querySelector('.popup__close_type_add-card');
const popupFormCardsAdd = popupCardsAddButton.querySelector('.popup__form_type_add-card');
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

initialCardsAdd(initialCards);

//Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//закрытие попапа при нажатии на оверлей
function closeOvarlay(popup){
  popup.addEventListener('click',(evt)=>{
    closePopup(evt.target);
  })
}

//закрытие попапа при нажатии esc
function closePopapEsc(popup) {
  document.addEventListener('keydown', (evt)=>{
    if(evt.keyCode === 27) {
      closePopup(popup);
    }
  })
}

//отправить форму профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

// кнопка редактировать профиль
function profileEddit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
  closeOvarlay(popupEdit);
  closePopapEsc(popupEdit);
}

//кнопка добавить
function addCards() {
  placeInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
  closeOvarlay(popupAdd);
  closePopapEsc(popupAdd)
}

  //отправка card
function formSubmitCards(evt){
  evt.preventDefault();
  dataCard.name = placeInput.value;
  dataCard.link = linkInput.value;
  renderCard(dataCard);
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
  titlePictureOpen.textContent = evt.target.alt;
  //////
  closeOvarlay(popupPic);
  closePopapEsc(popupPic)
}

//события
profileEditButton.addEventListener('click',profileEddit);
popupCloseButton.addEventListener('click',() => {closePopup(popupEdit)});
profileAddButton.addEventListener('click',() => {addCards()});
popupCardsAddCloseButton.addEventListener('click',() => {closePopup(popupAdd)});
popupFormCardsAdd.addEventListener('submit',formSubmitCards);
formElement.addEventListener('submit',formSubmitHandler);
popupPicCloseButton.addEventListener('click',() => {closePopup(popupPic)});

