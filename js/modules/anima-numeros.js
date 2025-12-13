export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total; // Pq em função do incremento o número resultante dá errado, então para mostrar o número certo fazemos isso (na verdade o setInerval vai passar e depois alterar pra esse numero, mas é tão rápido que não dá pra ver - truque)
          clearInterval(timer);
        }
      }, 25 * Math.random()); // para fazer alguma coisa com cada item do forEach
    });
  }

  // Função para criar um 'observador': queremos observar quando o usuário chegar na tela na parte de números para iniciar o evento, e executar ele apenas uma vez!
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect(); // se contém 'ativo', pare de observar - senão fica recomeçando a contagem sempre que mexemos no scroll em cima do elemento, assim executa uma vez só
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation); // primeiro precisamos criar o objeto, desta forma
  observer.observe(observerTarget, {attributes: true}); // obsserve() é um método deste objeto, no qual precisamos passar O QUE ele deve observar. queremos que ele observe a section de números, então criamos selecionamos a section colocando em uma variável observerTarget e passamos aqui. Depois precisamos passar 'opções', passamos a opção de 'attributes' pq é isso que queremos que ele observe (vai observar a classe do elemento)

}
