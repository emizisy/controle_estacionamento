const tabela = document.querySelector("#tabelaVagas tbody");
const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

reservas.forEach((reserva, index) => {
  const row = tabela.insertRow();
  row.innerHTML = `
    <td>${reserva.placa}</td>
    <td>${reserva.proprietario}</td>
    <td>${reserva.vaga}</td>
    <td><button onclick="removerReserva(${index})">Remover</button></td>
  `;
});

function removerReserva(index) {
  reservas.splice(index, 1);
  localStorage.setItem("reservas", JSON.stringify(reservas));
  location.reload();
}
