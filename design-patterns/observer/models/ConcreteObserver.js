const Observer = require("./Observer");

class Cliente extends Observer {
  constructor(nome) {
    super();
    this.nome = nome;
  }

  atualizar() {
    console.log(`Cliente ${this.nome}: Produto disponível!`);
  }
}

module.exports = Cliente;
