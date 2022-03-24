import Popup from './Popup.js'

export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    this._pictureOpen = this._popup.querySelector('.popup__pic_type_open-pic')
    this._titlePictureOpen = this._popup.querySelector('.popup__title_type_open-pic');
  }
  
  open(link,name){
    this._pictureOpen.src = link;
    this._pictureOpen.alt = name;
    this._titlePictureOpen.textContent = name;
    super.open();

  }
}
