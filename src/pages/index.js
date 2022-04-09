import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm';
import Api from '../components/Api.js';
import {
  initialCards, profileEditButton, popupCloseButton, profileAddButton, popupCardsAddCloseButton,
  popupFormCardsAdd, formEditProfile, formEditAvatar, popupAdd,
  jobInput, nameInput, popupEdit, data, avtarEditButton
} from '../utils/constans.js';
import { closePopup } from '../utils/utils.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '9d821a34-237a-4eb7-aba2-4697d5f65cd4',
    'Content-Type': 'application/json'
  }
});

//Форма подтверждения удаления
const popupConfirm = new PopupWithConfirm('.popup_type_delete-card');
popupConfirm.setEventListeners();

// Валидация форм
const profileEditValidate = new FormValidator(data, formEditProfile);
profileEditValidate.enableValidation();
const cardAddValidate = new FormValidator(data, popupFormCardsAdd);
cardAddValidate.enableValidation();
const avatarEditVailidate = new FormValidator(data, formEditAvatar);
avatarEditVailidate.enableValidation();
//Данные профиля
const user = new UserInfo({ userNameSelector: '.profile__name', userJobSelector: '.profile__job', userAvatarSelector: '.profile__avatar' });

const pictureCard = new PopupWithImage('.popup_type_open-pic');
pictureCard.setEventListeners();


//форма создания карточки
const formCardAdd = new PopupWithForm('.popup_type_add-card', {
  submitForm: (dat) => {
    formCardAdd.renderLoading(true)
    api.addCards(dat).then((res) => { return res.json() }).then((res) => {
      const card = createCards(res);
      cardSect.addItem(card);
    }).catch((error) => console.log(error)).finally(() => { formCardAdd.renderLoading(false) })

  }
})
formCardAdd.setEventListeners();

// Форма редактирования профиля
const profileEdit = new PopupWithForm('.popup_type_profile-edit', {
  submitForm: (dat) => {
    profileEdit.renderLoading(true)
    user.setUserInfo({ userData: dat });
    api.setUserInfo({ userData: dat }).catch((error) => console.log(error)).finally(() => { profileEdit.renderLoading(false) });
  }
});
profileEdit.setEventListeners();

//Редактирование аватара
const avatarEdit = new PopupWithForm('.popup_type_avatar-edit', {
  submitForm: (avatarSrc) => {
    avatarEdit.renderLoading(true);
    api.editAvatar(avatarSrc).then((res) => {
      user.setUserAvatar(res)
    }).catch((error) => console.log(error)).finally(() => { avatarEdit.renderLoading(false) });
    avatarEditVailidate.toggleButtonState();
  }
})
avatarEdit.setEventListeners();

//Редактирование профиля
function editProfile() {
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.userName;
  jobInput.value = userInfo.userJob;
  profileEditValidate.resetFormError();
  profileEdit.open()
}

//кнопка добавить
function addCards() {
  cardAddValidate.resetFormError();
  cardAddValidate.toggleButtonState();
  formCardAdd.open();
}

//Создание карточки
function createCards(item) {
  const card = new Card(item, '#photo-grid__card', handleCardClick, api, userId, {
    handleConfirm: () => {
      popupConfirm.renderLoading(false)
      popupConfirm.open();
      popupConfirm.setSubmitForm(() => {
        popupConfirm.renderLoading(true)
        api.deleteCard(item._id).then(() => {
          card.deleteCards();
          popupConfirm.close();
        }).catch((error) => console.log(error))
      })
    }
  })
  return card.generateCards()
}

//открытие картинки
function handleCardClick(name, link) {
  pictureCard.open(link, name);
}

//информация профиля
let userId;
api.getUserInfo().then((data) => {
  userId = data._id
  user.setUserInfo({ userData: data });
  user.setUserAvatar(data)
}).catch((error) => console.log(error));



//карточки при загрузке
api.getInitialCards().then((res) => {
  cardSect.renderItems(res);
}).catch((error) => console.log(error))


const cardSect = new Section({
  renderer: (item) => {

    const card = createCards(item);
    cardSect.addItem(card);

  }
}, '.photo-grid')

//события
profileEditButton.addEventListener('click', editProfile);
profileAddButton.addEventListener('click', () => { addCards() });
popupCardsAddCloseButton.addEventListener('click', () => { closePopup(popupAdd) });
avtarEditButton.addEventListener('click', () => { avatarEdit.open(); avatarEditVailidate.resetFormError() })