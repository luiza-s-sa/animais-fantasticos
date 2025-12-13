export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]'); // onde vamos clicar pra abrir
  const botaoFechar = document.querySelector('[data-modal="fechar"]'); // onde vamos clicar para fechar
  const containerModal = document.querySelector('[data-modal="container"]'); // onde vamos adicionar a classe de ativo

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function cliqueForaModal(event) {
    if (event.target === containerModal) {
      // poderia escrever event.target === this também. o containerModal é TODA TELA ao redor do modal em si! é aquele fundo com opacidade que aparece, quando clicar naquele fundo é pra fechar, quando clicar dentro do modal não é pra fazer nada!)
      toggleModal(event); // passamos o event para o prevent default funcionar, senão dá erro! (é pq na função toggleModal passamos um 'event.preventDefault()'. e se não passamos o event aqui ele não encontra o event para adicionar no preventDefault e dá erro)
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

// primeiro temos que pensar em selecionr todos os elementos envolvidos na ação de ativar/desativar o modal: botão de abrir (login), botão de fechar, e o modal em si.
// últimos passos: verificações! SEMPRE VERIFICAR SE OS SELETORES EXISTEM NA PÁGINA, para não dar erro.
