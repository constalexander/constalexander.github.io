export default class ButtonComponent {
  root = null;
  props = [];
  templates = {};

  constructor(node, type) {
    this.root = node;
    this.type = type;
    this.render();
  }

  render() {
    this.detachListeners();
    this.root.textContent = "button component woot woot";
    this.attachListeners();
  }

  detachListeners() {
    this.root.removeEventListener("click", this.handleClick);
  }

  attachListeners() {
    this.root.addEventListener("click", this.handleClick);
  }

  handleClick = () => {
    console.log("clicked button");
  };
}
