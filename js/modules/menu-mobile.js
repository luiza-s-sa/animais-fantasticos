import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor (menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    // definimos eventos padrão, caso os eventos não sejam passados como argumento
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    // bind de openMenu pois é usado dentro da classe como função de callback
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    this.menuButton.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
    console.log('teste');
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
