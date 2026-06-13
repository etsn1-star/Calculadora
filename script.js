//define a taxa de quadros por segundo
window.onload = function () {
  setInterval(principal, 1000 / 30);
};

const visor = document.getElementById("visorText");

//define a classe botão da calculadora
class Botao {
  constructor(valor, id) {
    this.valor = valor;
    this.id = id;
  }
}

//array de números
const numeros = [];
//preenche o array
for (let i = 0; i < 10; i++) {
  numeros.push(new Botao(i, document.getElementById(i)));
}

//aplica o evento tipo click a todos
numeros.forEach((element) => {
  element.id.addEventListener("click", () => {
    visor.innerHTML = visor.innerHTML + " " + element.valor;
  });
});
