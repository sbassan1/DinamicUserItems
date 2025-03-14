import { useClickOutside } from 'stimulus-use';

export class DropDownMenu {
    constructor(title, list) {
        this.title = title;
        this.list = list; // List of {title: string, link: string}
    }
}

export class DropDownMenuUI {
    constructor(menu) {
        this.menu = menu;
        this.elements = {};
    }

    render() {

        const menuContainer = document.createElement('div');
        menuContainer.textContent = this.menu.title;
        menuContainer.className = 'container-btn';

        const listOfLinks = document.createElement('ul');
        listOfLinks.style.display = 'none'; // Initially hidden
        listOfLinks.className = 'dropdown-ul';

        this.menu.list.forEach(elementLink => {
            const linkContainer = document.createElement('li');
            linkContainer.className = 'dropdown-li';
            const linkElement = document.createElement('a');
            linkElement.textContent = elementLink.title;
            linkElement.href = elementLink.link;

            linkContainer.append(linkElement);
            listOfLinks.append(linkContainer);
        });

        this.elements = { menuContainer, listOfLinks };

        const wrapper = document.createElement('div');
        wrapper.className = 'dropdown-menu-wrapper';
        wrapper.append(menuContainer, listOfLinks);

        return wrapper;
    }
}

export class DropDownMenuManager {

    constructor(menu, ui) {
        this.menu = menu;
        this.ui = ui;
        this.visible = false;

        this.eventListeners();
    }

    eventListeners() {

        const { menuContainer, listOfLinks } = this.ui.elements;

        menuContainer.addEventListener('click', () => this.toggleMenu());

        document.addEventListener('click', (event) => {
            if (!menuContainer.contains(event.target) && !listOfLinks.contains(event.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const { listOfLinks } = this.ui.elements;
        this.visible = !this.visible;
        listOfLinks.style.display = this.visible ? 'block' : 'none';
    }

    closeMenu() {
        const { listOfLinks } = this.ui.elements;
        this.visible = false;
        listOfLinks.style.display = 'none';
    }
}
