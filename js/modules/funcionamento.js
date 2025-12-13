export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // transormar a split em uma array, e map (map itera por cada elemento do array) para transformar as strings em números
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const abertoDia = diasSemana.indexOf(diaAgora) !== -1;
  const abertoHora = (horarioSemana[0] <= horarioAgora && horarioSemana[1] > horarioAgora);

  if (abertoDia && abertoHora) {
    funcionamento.classList.add('aberto');
  }
}
// const agora = new Date();
// console.log(agora)
// console.log(agora.getDate())
// console.log(agora.getDay()) // de 0 a 6, começando o 0 no domingo

// const natal = new Date('Dec 24 2025 23:59');
// const anoNovo = new Date('Dec 31 2025 23:59');
// console.log(natal)
// console.log(anoNovo)

// function transformarMiliSegundosEmDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarMiliSegundosEmDias(agora.getTime())
// const diasNatal = transformarMiliSegundosEmDias(natal.getTime())
// const diasAnoNovo = transformarMiliSegundosEmDias(anoNovo.getTime())

// console.log(agora.getTime())
// console.log(transformarMiliSegundosEmDias(agora.getTime()))
// console.log(natal.getTime())

// console.log(diasNatal - diasAgora)
// console.log(`Faltam ${Math.floor(diasNatal - diasAgora)} dias para o Natal`)
// console.log(`Faltam ${Math.floor(diasAnoNovo - diasAgora)} dias para o Ano Novo`)
