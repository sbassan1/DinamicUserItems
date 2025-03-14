

export class DropDownMenu {

    constructor(title, list) {
        this.title = title;
        this.list = list; // List of objects for each link of the menu {title: string , link : string} 
    }

}


export class DropDownMenuUI {

    constructor(menu){
        this.menu = menu;
        this.elements = {};
    }

    render() {

        const menuContainer = document.createElement('button');
        menuContainer.textContent = this.menu.title;
        menuContainer.className = 'container-btn';

        const listOfLinks = document.createElement('ul');
        listOfLinks.style.display = "none";
        listOfLinks.className = 'dropdown-ul';

        this.menu.list.forEach(elementLink => {
            
            const linkContainer = document.createElement('li');
            linkContainer.className = "dropdown-li"
            const linkElement = document.createElement('a');
            linkElement.textContent = elementLink.text;
            linkElement.href = elementLink.link;

            linkContainer.append(linkElement);
            listOfLinks.append(linkContainer);

        });

        this.elements = {menuContainer, listOfLinks};

        return menuContainer;
    }

}

/*

export class DropDownMenuManager {

    constructor(menu, ui) {
        this.menu = menu;
        this.ui = ui;
        this.eventListeners();  
        this.visible = true;   
    }   

    eventListeners(menu, ui) {

        const {menuContainer,listOfLinks} = this.ui.elements;

        menuContainer.addEventListener("click", () => {
            
            if (this.visible) {
                this.visible = false
                this.ui.menuContainer.style.display = "none";
            }else{
                this.visible = true;
                this.ui.menuContainer.style.display = "none";
            }            
            
        });


    }


}

*/
