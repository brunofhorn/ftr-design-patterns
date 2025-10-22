const Iterador = require("./Iterador");

class ColecaoProdutos {
  constructor() {
    this.protudos = [];
  }

  adicionar(protudo) {
    this.protudos.push(protudo);
  }

  criarIterador() {
    return new Iterador(this.protudos);
  }
}

module.exports = ColecaoProdutos;
