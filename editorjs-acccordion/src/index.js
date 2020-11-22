import css from "./index.css";
import ToolboxIcon from "./icon.svg";

export default class Accordion {
  static get toolbox() {
    return {
      title: "Accordion",
      icon: ToolboxIcon,
    };
  }

  constructor({ data, api, config }) {
    this.data = {
      header: data.header || "",
      content: data.content || "",
    };

    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("accordion");

    if (this.data && this.data.header) {
      this._createAccordion(this.data.header, this.data.content);
      return this.wrapper;
    }

    this._createAccordion();
    return this.wrapper;
  }

  _createAccordion(headerText, contentText) {
    const header = document.createElement("div");
    header.setAttribute("data-placeholder", "Accordion header");
    header.classList.add("header");
    header.contentEditable = true;
    header.innerHTML = headerText || "";

    const content = document.createElement("div");
    content.setAttribute("data-placeholder", "Accordion content");
    content.classList.add("content");
    content.contentEditable = true;
    content.innerHTML = contentText || "";

    this.wrapper.innerHTML = "";
    this.wrapper.appendChild(header);
    this.wrapper.appendChild(content);
  }

  save(blockContent) {
    const header = blockContent.querySelector(".header");
    const content = blockContent.querySelector(".content");

    return Object.assign(this.data, {
      header: header.innerHTML || "",
      content: content.innerHTML || "",
    });
  }

  validate(blockData) {
    return blockData.header.trim() !== "";
  }
}
