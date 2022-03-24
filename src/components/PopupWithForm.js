import Popup from './Popup.js'

export default class PopupWithForm extends Popup{
  constructor(popupSelector,{submitForm}){
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
 
  }
  _getInputValues(){
    this._data = {};
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._inputList.forEach((item)=>{
        this._data[item.name] = item.value;
    
    })
    return this._data;
   
  }

  setEventListeners(){
    super.setEventListeners();
    this._popup.querySelector('.popup__form').addEventListener('submit',(evt)=>{ 
        evt.preventDefault();
        this._submitForm(this._getInputValues());
        this.close();
    })
  }

  open(){
    super.open();
  }

  close(){
    super.close();
    this._form.reset();
  }
}