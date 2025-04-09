document.getElementById("reservaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const reserva = {
    placa: document.getElementById("placa").value,
    proprietario: document.getElementById("proprietario").value,
    apartamento: document.getElementById("apartamento").value,
    bloco: document.getElementById("bloco").value,
    modelo: document.getElementById("modelo").value,
    cor: document.getElementById("cor").value,
    vaga: document.getElementById("vaga").value,
  };

  console.log("Reserva cadastrada:", reserva);


  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  reservas.push(reserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));

  document.getElementById("reservaForm").reset();
  mostrarModal();
});

function mostrarModal() {
  document.getElementById("modalSucesso").style.display = "block";
}

function fecharModal() {
  document.getElementById("modalSucesso").style.display = "none";
}

