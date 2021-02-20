export class Section {

  constructor({items, renderer}, containerSelector, api) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._api = api;
  }

  addItem(element) {
    this._containerSelector.append(element);
  }
  
  prependItem(element) {
    this._containerSelector.prepend(element);
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
}
