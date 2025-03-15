import {
  DropDownMenu,
  DropDownMenuManager,
  DropDownMenuUI,
} from "./dropdownmenu.js";

import "./style.css";

const myMenu = new DropDownMenu("DropDown Menu Name", [
  { title: "A link", link: "#" },
  { title: "A button", button: () => console.log("Button Pressed!!") },
  { title: "Another link", link: "#" },
  { title: "test", testError: "#" },
]);

const myMenuUI = new DropDownMenuUI(myMenu);
const testDiv = document.getElementsByClassName("test")[0];
testDiv.append(myMenuUI.render());

new DropDownMenuManager(myMenu, myMenuUI);
