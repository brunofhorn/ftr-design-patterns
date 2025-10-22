const Subject = require("./Subject");

class Loja extends Subject {
  constructor() {
    super();
  }

  adicionarObservers(observer) {
    this.observers.push(observer);
  }

  removerObservers(observer) {
    this.observers = this.observers.filter((sub) => sub !== observer);
  }

  notificarObservers() {
    console.log("Notificando assinantes...");
    this.observers.forEach((observer) => observer.atualizar());
  }

  receberNovoProduto() {
    console.log("Novo produto chegou à loja!");
    this.notificarObservers();
  }
}

module.exports = Loja;
