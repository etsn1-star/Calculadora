//define a taxa de quadros por segundo
window.onload = function () {
  setInterval(principal, 1000 / 30);
};

const visor = document.getElementById("visorText");

//define a classe botão da calculadora
class Botao {
  //construtor da classe
  constructor(valor, id) {
    this.valor = valor;
    this.id = document.getElementById(id);

    //aplica o evento tipo click a todos
    this.id.addEventListener("click", () => {
      this.acao();
    });
  }
  //declara o método que posteriormente usará polimorfismo
  acao() {
    visor.innerHTML = visor.innerHTML + this.valor;
  }
}

class Deletar extends Botao {
  acao() {
    visor.innerHTML = "";
  }
}
class Igualdade extends Botao {
  acao() {
    let resultado = eval(visor.innerHTML);
    visor.innerHTML = resultado;
  }
}

//array de números
const numeros = [];
const operadores = [];
const operEespeciais = [];
//preenche o array dos números
for (let i = 0; i < 10; i++) {
  numeros.push(new Botao(i, i));
}
operadores.push(
  new Botao("+", 10),
  new Botao("-", 11),
  new Botao("*", 12),
  new Botao("/", 13),
);
operEespeciais.push(new Deletar("DEL", 15), new Igualdade("=", 14));
