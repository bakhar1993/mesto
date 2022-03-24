export default class Card {
  constructor(dataCard, selectorTemplate,handleCardClick) {
    this._selectorTemplate = selectorTemplate;
    this._src = dataCard.link;
    this._name = dataCard.name;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const gridCards = document.querySelector(this._selectorTemplate).content.querySelector('.photo-grid__item').cloneNode(true);
    return gridCards;
  }

  _setEventListener() {
    this._pictureCards.addEventListener('click', () => { this._handleCardClick(this._name, this._src)})
    this._deleteButton.addEventListener('click', () => { this._deleteCards() })
    this._likeButton.addEventListener('click', () => { this._clickLike() });
  }


  _deleteCards() {
    this._element.closest('.photo-grid__item').remove();
  }

  _clickLike() {
    this._likeButton.classList.toggle('photo-grid__like_active');
  }

  generateCards() {
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