import ButtonComponent from "./components/Button.component.js";

document
  .querySelectorAll('[data-component="ButtonComponent"]')
  .forEach((node) => {
    console.log("node", node);
    return new ButtonComponent(node);
  });
