import {DropDownMenu , DropDownMenuManager, DropDownMenuUI} from './dropdownmenu.js'
import "./style.css"

const myMenu = new DropDownMenu('DropDown Menu Name', [
    { title: 'Home', link: '#' },
    { title: 'About', link: '#' },
    { title: 'Services', link: '#' },
    { title: 'Contact', link: '#' }
]);

const myMenuUI = new DropDownMenuUI(myMenu);
const testDiv = document.getElementsByClassName('test')[0];
testDiv.append(myMenuUI.render());

new DropDownMenuManager(myMenu, myMenuUI);