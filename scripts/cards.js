import {openPopup} from './utils.js';
import {pictureOpen,popupPic,titlePictureOpen} from './constans.js'

  class Card {
  constructor(dataCard,selectorTemplate) {
    this._selectorTemplate = selectorTemplate;
    this._src = dataCard.link;
    this._name = dataCard.name;
  }

  _getTemplate() {
    const gridCards = document.querySelector(this._selectorTemplate).content.querySelector('.photo-grid__item').cloneNode(true);
    return gridCards;
  }

  _setEventListener() {
    this._pictureCards.addEventListener('click',()=>{this._openPic()})
    this._deleteButton.addEventListener('click',()=>{this._deleteCards()})
    this._likeButton.addEventListener('click',()=>{this._clickLike()});
  }

  
  _openPic() {
    openPopup(popupPic);
    pictureOpen.src = this._src;
    pictureOpen.alt = this._name;
    titlePictureOpen.textContent = this._name;
  }

  _deleteCards() {
    this._element.closest('.photo-grid__item').remove();
  }

  _clickLike() {
    this._likeButton.classList.toggle('photo-grid__like_active');
  }

  createCards() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.photo-grid__like');
    this._deleteButton = this._element.querySelector('.photo-grid__delete');
    
    this._element.querySelector('.photo-grid__title').textContent = this._name;
    this._pictureCards = this._element.querySelector('.photo-grid__picture');
    this._pictureCards.src = this._src;
    this._pictureCards.alt = this._name;

    
    this._setEventListener();
    return this._element;
  }
}


export {Card}
