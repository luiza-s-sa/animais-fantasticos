import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const button = document.querySelector('[data-menu="button"]');
  const list = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function abrirMenu(event) {
    button.classList.toggle("active");
    list.classList.toggle("active");
    outsideClick(list, eventos, () => {
      list.classList.remove("active");
      button.classList.remove("active");
    });
  }

  if (button) {
    eventos.forEach((evento) => {
      button.addEventListener(evento, abrirMenu);
    });
  }
}
