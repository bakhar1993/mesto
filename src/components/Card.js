export default class Card {
  constructor(dataCard, selectorTemplate,handleCardClick,api,userId,{handleConfirm}) {
    this._selectorTemplate = selectorTemplate;
    this._src = dataCard.link;
    this._name = dataCard.name;
    this._likes = dataCard.likes;
    this._handleConfirm = handleConfirm;
    this._dataCard = dataCard;

    this._api = api;
    this._userId = dataCard.owner._id;
    this._cardId = dataCard._id;
    this._id = userId;

    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const gridCards = document.querySelector(this._selectorTemplate).content.querySelector('.photo-grid__item').cloneNode(true);
    return gridCards;
  }

  _setEventListener() {
    this._pictureCards.addEventListener('click', () => { this._handleCardClick(this._name, this._src)})
    this._deleteButton.addEventListener('click', () => { this._handleConfirm() })
    this._likeButton.addEventListener('click', () => { this._clickLike() });
  }


  deleteCards() {
    this._element.closest('.photo-grid__item').remove();
  }


  _clickLike() {
    const likeCount = this._likeCount;
    const likeButton = this._likeButton;
    if(!(this._likeButton.classList.contains('photo-grid__like_active'))) {

      this._api.putLike(this._cardId).then((data)=>{
        likeCount.textContent = data.likes.length;
        likeButton.classList.add('photo-grid__like_active');
      })
    } else {    
      this._api.deleteLike(this._cardId).then((data)=>{
        likeCount.textContent = data.likes.length;
        likeButton.classList.remove('photo-grid__like_active');
      })
      
    }
  }


  generateCards() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.photo-grid__like');
    this._deleteButton = this._element.querySelector('.photo-grid__delete');
    this._likeCount = this._element.querySelector('.photo-grid__like-count');

    this._element.querySelector('.photo-grid__title').textContent = this._name;
    this._pictureCards = this._element.querySelector('.photo-grid__picture');
    this._pictureCards.src = this._src;
    this._pictureCards.alt = this._name;
    this._likeCount.textContent = this._likes.length;

    if(this._likes.find((obj) => this._id ===  obj._id)) {
      this._likeButton.classList.add('photo-grid__like_active');
    };
    if(this._id === this._userId){
      this._deleteButton.classList.add('photo-grid__delete_opened')
    }

    this._setEventListener();
    return this._element;
  }
}