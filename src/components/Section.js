export default class Section{
  constructor({items,renderer},containerSelector){
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems() {
    this._renderer(this._items);
  }
  addItem(element) {
    document.querySelector(this._containerSelector).prepend(element);
  }

}