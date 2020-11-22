import css from "./index.css";
import Icon from "./column-start.svg";

export class ColumnStart {
  static get contentless() {
    return true;
  }

  static get toolbox() {
    return {
      title: "Column Start",
      icon: Icon,
    };
  }

  constructor({ data, api }) {
    this.api = api;
    this._data = {};

    this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-column-start",
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
