import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active'); // o 'this' está falando com o 'menu' (o evento está sendo adicionado ao menu no forEach)
    outsideClick(this, ['touchstart', 'click'],() => {
      this.classList.remove('active');
    });
  }
}
