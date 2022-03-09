export const popupEdit = document.querySelector('.popup_type_profile-edit');
export const profileEditButton = document.querySelector('.profile__edit-Button');
export const popupCloseButton = document.querySelector('.popup__close_type_profile-edit');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const formEditProfile = document.querySelector('.popup__form_type_profile-edit');
export const nameInput = document.querySelector('.popup__input_type-name');
export const jobInput = document.querySelector('.popup__input_type-job');

export const popupAdd = document.querySelector('.popup_type_add-card');
export const popupCardsAddButton = document.querySelector('.popup_type_add-card');
export const popupCardsAddCloseButton = popupAdd.querySelector('.popup__close_type_add-card');
export const popupFormCardsAdd = popupCardsAddButton.querySelector('.popup__form_type_add-card');

export const popupCardsSubmitButton = popupAdd.querySelector('.popup__submit_type_add-card');
export const profileEditSubmitButton = popupEdit.querySelector('.popup__submit_type_profile-edit')

export const inputListPopup = Array.from(document.querySelectorAll('.popup__input'));

export const placeInput = popupFormCardsAdd.querySelector('.popup__input_type-place');
export const linkInput = popupFormCardsAdd.querySelector('.popup__input_type-link');

export const profileAddButton = document.querySelector('.profile__add-Button');
export const dataCard = {};
export const photoGrid = document.querySelector('.photo-grid');
const gridCardsTemplate = document.querySelector('#photo-grid__card').content;

export const popupPic = document.querySelector('.popup_type_open-pic');
export const popupPicCloseButton = document.querySelector('.popup__close_type_open-pic');
export const pictureOpen = document.querySelector('.popup__pic_type_open-pic');
export const titlePictureOpen = document.querySelector('.popup__title_type_open-pic');
export const ESC_KEYCODE = 27;
export const initialCards = [
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
export const data = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};