export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });

  // função 0: criar a tooltip box em si
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  };

  // função 1: para quando colocamos o mouse em cima do elemento
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  // criaríamos uma função, mas como tooltipBox está criada dentro do escopo de outra função não temos acesso a ela aqui fora. e não queremos colocar essa função dentro da outra função para deixar o código mais organizado. portanto vamos usar uma estratégia nova/diferente: passar no evento um objeto (criado abaixo) ao invés de uma função, e ativaremos o método hendleEvent neste objeto.

  // objeto como função 2: para quando tiramos o mouse de cima do elemento
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove(); // this = tooltipBox
      this.element.removeEventListener('mouseleave', onMouseLeave); // acho que nem precisaria essa parte aqui
      this.element.removeEventListener('mousemove', onMouseMove); // nem isso aqui. (é só pra não aparecer no console na parte de event listeners que tem esses eventos acontecendo)
    }
    // tooltipbox e element são propriedades que vamos definir dentro da outra função (é como se fosse criadas aqui, só que sem valor.)
  };

  // objeto como função 3: para quando movemos o mouse em cima do elemento (fazer tooltip acompanhar)
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px'; // adicionar os 20 = estratégia só pra caixa não ficar 'piscando'
    }
  };
}

