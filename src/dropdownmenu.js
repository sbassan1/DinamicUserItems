export class DropDownMenu {
  constructor(title, list) {
    this.title = title;
    this.list = list; // List of links {title: string, link: string} or {title: string, button: arrow function}
  }
}

export class DropDownMenuUI {
  constructor(menu) {
    this.menu = menu;
    this.elements = {};
  }

  render() {
    const menuContainer = document.createElement("button");
    menuContainer.textContent = this.menu.title;
    menuContainer.className = "dropdown-container-btn";

    const listOfLinks = document.createElement("ul");
    listOfLinks.style.display = "none";
    listOfLinks.className = "dropdown-ul";

    this.menu.list.forEach((element) => {
      const linkContainer = document.createElement("li");
      linkContainer.className = "dropdown-li";

      if ("link" in element) {
        const linkElement = document.createElement("a");
        linkElement.textContent = element.title;
        linkElement.href = element.link;
        linkContainer.append(linkElement);
      } else if ("button" in element) {
        const linkElement = document.createElement("div");
        linkElement.textContent = element.title;
        linkElement.addEventListener("click", element.button);
        linkContainer.append(linkElement);
      } else {
        const linkElement = document.createElement("div");
        linkElement.textContent = element.title + " /?Error, not link or btn";
        linkContainer.append(linkElement);
      }

      listOfLinks.append(linkContainer);
    });

    this.elements = { menuContainer, listOfLinks };

    const wrapper = document.createElement("div");
    wrapper.className = "dropdown-menu-wrapper";
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

    menuContainer.addEventListener("click", () => this.toggleMenu());

    document.addEventListener("click", (event) => {
      // To check if the user clicked outside the list and button
      if (
        !menuContainer.contains(event.target) &&
        !listOfLinks.contains(event.target)
      ) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    const { listOfLinks } = this.ui.elements;
    this.visible = !this.visible;
    listOfLinks.style.display = this.visible ? "block" : "none";
  }

  closeMenu() {
    const { listOfLinks } = this.ui.elements;
    this.visible = false;
    listOfLinks.style.display = "none";
  }
}
