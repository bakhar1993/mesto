const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type-name');
const jobInput = document.querySelector('.popup__input_type-job');
const profileEditButton = document.querySelector('.profile__edit-Button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const photoGrid = document.querySelector('.photo-grid');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const profileAddButton = document.querySelector('.profile__add-Button');
const popupCardsAdd = document.querySelector('.popup_cards-add');
const popupFormCardsAdd = popupCardsAdd.querySelector('.popup__form_cards-add');
const placeInput = popupFormCardsAdd.querySelector('.popup__input_type-place');
const linkInput = popupFormCardsAdd.querySelector('.popup__input_type-link');
const popupCardsAddCloseButton = popupCardsAdd.querySelector('.popup__close_cards-add');
const addButton = document.querySelector('.profile__add-Button');
const popupPicCloseButton = document.querySelector('.popup__close-pic');

const gridCardsTemplate = document.querySelector('#photo-grid__card').content;

//Открытие попапов
function popupOpened(popup) {
  popup.classList.add('popup_opened');
}

//закрытие попапа
function popupClosed(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

//отправить форму профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClosed(evt);
}


// кнопка редактировать профиль
function profileEddit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupOpened(popup);
}

//события
profileEditButton.addEventListener('click',profileEddit);
popupCloseButton.addEventListener('click',popupClosed);
profileAddButton.addEventListener('click',addCards);
popupCardsAddCloseButton.addEventListener('click',popupClosed);
popupFormCardsAdd.addEventListener('submit',formSubmitCards);
formElement.addEventListener('submit', formSubmitHandler);
popupPicCloseButton.addEventListener('click',popupClosed);

//кнопка добавить
function addCards() {
  placeInput.value = '';
  linkInput.value = '';
  popupCardsAdd.classList.add('popup_opened');
  }

  //отправка card
function formSubmitCards(evt){
   evt.preventDefault();
   createCards(placeInput.value,linkInput.value);
   popupClosed(evt);
}

//создание карточки
function createCards(name,link){
  const gridCards = gridCardsTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const likeButton = gridCards.querySelector('.photo-grid__like');
  const deleteButton = gridCards.querySelector('.photo-grid__delete');
  const pictureCards = gridCards.querySelector('.photo-grid__picture');
  const titleCard =gridCards.querySelector('.photo-grid__title');
  pictureCards.src = link;
  pictureCards.alt = name;
  titleCard.textContent = name;  
  photoGrid.prepend(gridCards);

  pictureCards.addEventListener('click',popupOpenPic)
  deleteButton.addEventListener('click',deleteCards)
  likeButton.addEventListener('click',clickLike);
} 

//фото при загрузке страницы
function initialCardsAdd(arr) {
  arr.forEach(function(item) {
createCards(item.name,item.link);
  })
}
initialCardsAdd(initialCards);


//лайк
function clickLike(evt) {
evt.target.closest('.photo-grid__description').querySelector('.photo-grid__like').classList.toggle('photo-grid__like_active');
}

//удаление карточки
function deleteCards(evt){
  evt.target.closest('.photo-grid__item').remove();
}
//открытие изображения
function popupOpenPic(evt) {
  const popupPic = document.querySelector('.popup_open-pic');
  popupOpened(popupPic);
  popupPic.style.background = 'rgba(0, 0, 0, 0.9)';
  document.querySelector('.popup__pic').src = evt.target.closest('.photo-grid__item').querySelector('.photo-grid__picture').src;
  document.querySelector('.popup__pic-title').textContent = evt.target.closest('.photo-grid__item').querySelector('.photo-grid__title').textContent;
}