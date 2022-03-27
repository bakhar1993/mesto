export default class Popup{
  constructor(popupSelector){
    // this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open(){
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown",this._handleEscClose)
  }
  close(){
    this._popup.classList.remove('popup_opened');
    document.removeEventListener("keydown",this._handleEscClose)
  }

  _handleEscClose(evt){
    if (evt.key === 'Escape') {
        this.close();
    }
  }
  _closeOvarlay(evt){
    if (evt.target === this._popup) {
        this.close();
      }
  }

  setEventListeners(){
    this._popup.querySelector('.popup__close').addEventListener('mousedown', ()=>{ this.close()});
    this._popup.addEventListener('mousedown', (evt)=>{ this._closeOvarlay(evt)})
  }
}