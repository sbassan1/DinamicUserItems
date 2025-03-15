# 📌 Simple Drop-Down Menu JS Package

A simple drop-down menu JS package for personal use. Feel free to use it though! 🎉

Link to the npm package: https://www.npmjs.com/package/sbassan1-dropdown-menu

## 🚀 Usage Example

```js
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
```

## 📖 How It Works :

<ul>
  <li>
    1️⃣ Create a menu using the DropDownMenu class, providing a title and a list of links or/and buttons with functions
  </li>  
  <li>
    2️⃣ Instantiate the DropDownMenuUI class and render it inside the desired <div>
  </li>  
  <li>
    3️⃣ Finally, instantiate the DropDownMenuManager class to handle the menu interactions
  </li>  
</ul>

### ✅ You can customize the styling, add new effects, and extend the manager class to add effects!

I hope this is useful for anyone! 😊
