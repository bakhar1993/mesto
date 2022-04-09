import Popup from "./Popup";

export default class PopupWithConfirm extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._popupButton = this._popup.querySelector('.popup__submit');
        this._buttonText = this._popupButton.textContent;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt)=>{

            evt.preventDefault();
            this._submitConfirm();
        })
}

    // open(){
    //     super.open();
    //   }
    
    //   close(){
    //     super.close();
    //   }
    renderLoading(load) {
        if(load) {
          this._popupButton.textContent = 'Сохранение...'
        } else {
          this._popupButton.textContent = 'Да'
        }
      }
      setSubmitForm(data){
          this._submitConfirm = data;
      }
}