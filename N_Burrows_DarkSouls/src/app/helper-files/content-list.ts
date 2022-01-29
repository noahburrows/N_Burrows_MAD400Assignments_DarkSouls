class ContentList {

  private _items: Content[];

  constructor() {
    this._items = []; // initialize array
  }

  get items(): Content[] {
    return this._items;
  }

  addContent(newContent: Content) {
    return this._items.push(newContent);
  }

  contentCount() {
    return this._items.length;
  }

  processContent(index: number): String {
    let content: Content = this._items[index];
    return "Title: " + content.title + "\nDescription: " + content.description + "\nCreator: " + content.creator
      + "\nImage: " + content.imgURL + "\nType: " + content.type;
  }
}
