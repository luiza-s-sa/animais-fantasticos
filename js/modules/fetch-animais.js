import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((item) => {
        const divAnimal = createAnimal(item);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    }
    catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('./animaisapi.json');
}

// EXPLICAÇÃO:
// primeira coisa sempre é criar a função que vai fazer o uso assíncrono! aqui utilizamos a async function, mas poderia ser utilizado o fetch direto com o .then como havíamos visto anteriormente (async/await é a forma mais 'moderna' de fazer requisições assíncronas, mas não é suportado por browsers mais antigos).
// depois criamos a função que vai criar os elementos html com base na api (função createAnimal). criamos uma div e definimos seu conteudo html, reescrevendo da mesma forma que a estrutura que utilizamos no html, mas substituindo os valores pelos valores fornecidos pela api. retornamos a div para poder utilizar ela na nossa função principal.
// voltamos para a função principal para adicionar o elemento criado ao html do site. selecionamos a div que contém os animais e números (.numeros-grid) e, para inserir a div criada nele, utilizamos o appendChild (inserir um nó filho a um pai, ou seja, inserir a div criada (JS: divAnimal) dentro da div pai (JS: numerosGrid)))
// por último importamos a função initAnimaNumeros() aqui, removendo do script principal, e adicionamos/ativamos ela após o fetch acontecer - isso pq mantendo ela no script principal pode dar problema do JS tentar executar a função initAnimaNumeros() antes da fetch desta função aqui acontecer e aí a animação não funcionar.
