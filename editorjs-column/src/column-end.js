import css from "./index.css";
import Icon from "./column-end.svg";

export class ColumnEnd {
  static get contentless() {
    return true;
  }

  static get toolbox() {
    return {
      title: "Column End",
      icon: Icon,
    };
  }

  constructor({ data, api }) {
    this.api = api;
    this._data = {};

    this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-column-end",
    };

    this.wrapper = undefined;
    this._element = this.drawView();
    this.data = data;
  }

  drawView() {
    let wrapper = document.createElement("div");
    wrapper.classList.add(this._CSS.wrapper, this._CSS.block);
    return wrapper;
  }

  render() {
    return this._element;
  }

  save(blockContent) {
    return {};
  }
}
