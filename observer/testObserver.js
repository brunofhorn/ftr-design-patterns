const Cliente = require("./models/ConcreteObjserver");
const Loja = require("./models/ConcreteSubject");

const loja = new Loja();
const clienteA = new Cliente("Carlos");
const clienteB = new Cliente("Ana");
const clienteC = new Cliente("Beto");

loja.adicionarObservers(clienteA);
loja.adicionarObservers(clienteB);
loja.adicionarObservers(clienteC);

loja.removerObservers(clienteA);

loja.receberNovoProduto();
