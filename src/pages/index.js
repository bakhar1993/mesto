import './index.css';
import  Card  from '../components/Card.js';
import  FormValidator  from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  initialCards,profileEditButton, popupCloseButton, profileAddButton, popupCardsAddCloseButton,
  popupFormCardsAdd, formEditProfile,popupAdd,
 jobInput, nameInput, popupEdit, data,
} from '../utils/constans.js';
import { closePopup} from '../utils/utils.js';

// Валидация форм
const profileEditValidate = new FormValidator(data, formEditProfile);
profileEditValidate.enableValidation();
const cardAddValidate = new FormValidator(data, popupFormCardsAdd);
cardAddValidate.enableValidation();

//Данные профиля
const User = new UserInfo({userNameSelector: '.profile__name', userJobSelector: '.profile__job'});

const PictureCard = new PopupWithImage('.popup_type_open-pic');
PictureCard.setEventListeners();

// создание карточек при загрузке
const cardSect = new Section({items: initialCards,renderer: (item)=>{
  item.forEach((elem)=>{
    const card = createCards(elem);
    cardSect.addItem(card);
  })
}
},'.photo-grid')
cardSect.renderItems();


//форма создания карточки
const FormCardAdd = new PopupWithForm('.popup_type_add-card',{submitForm: (dat)=>{
  const card = createCards(dat);
  cardSect.addItem(card);
}})
FormCardAdd.setEventListeners();

// Форма редактирования профиля
const ProfileEdit = new PopupWithForm('.popup_type_profile-edit',{
  submitForm: (dat)=>{
    User.setUserInfo({userData: dat});
  }
});
ProfileEdit.setEventListeners();

//Редактирование профиля
function editProfile() {
  User.getUserInfo();
  nameInput.value = User.getUserInfo().userName;
  jobInput.value = User.getUserInfo().userJob;
  ProfileEdit.open()
  profileEditValidate.resetFormError();
}

//кнопка добавить
function addCards() {
  FormCardAdd.open();
  cardAddValidate.resetFormError();
  cardAddValidate.toggleButtonState()
}

//Создание карточки
function createCards(item) {
  const card = new Card(item, '#photo-grid__card',handleCardClick);
  return card.generateCards()
}

//открытие картинки
function handleCardClick(name, link) {
  PictureCard.open(link,name);
}

//события
profileEditButton.addEventListener('click', editProfile);
popupCloseButton.addEventListener('mousedown', () => { closePopup(popupEdit) });
profileAddButton.addEventListener('click', () => { addCards() });
popupCardsAddCloseButton.addEventListener('click', () => { closePopup(popupAdd) });