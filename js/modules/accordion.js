// englobamos tudo que fizemos na primeira parte adicionando tudo dentro de uma função e executando a função depois; isso é para caso queiramos por exemplo criar outras const com mesmo nome ou algo do tipo futuramente no código, então temos as partes isoladas em blocos e não corre risco de dar interferência

// o plano: quando clicamos na pergunta, mostra a resposta. então o clique na pergunta (dd) ativa um evento na sua 'resposta' (dt)

export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeClass = "ativo"; // pq se futuramente queremos mudar o nome da classe mudamos só uma vez. sempre que começar a repetir muito algum termo dentro do código é melhor colocar em uma constante.

  function activeAccordion(event) {
    // event.currentTarget = this
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((e) => {
      e.addEventListener("click", activeAccordion);
    });
  }
}
