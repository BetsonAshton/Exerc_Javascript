const produtos = [
    { id: 1, nome: "detergente", valor: 2.0, categoria: "limpeza" },
    { id: 2, nome: "amaciante", valor: 6.5, categoria: "limpeza" },
    { id: 3, nome: "pão", valor: 2.0, categoria: "alimento" },
    { id: 4, nome: "queijo", valor: 7.0, categoria: "alimento" },
    { id: 5, nome: "leite", valor: 2.2, categoria: "alimento" }
];

const ids = produtos.map(produto => produto.id)
const nomes = produtos.map(produto => produto.nome)

console.log(nomes)

console.log(ids)


const lista = [5, 9, 8, 4]

const listas = lista.map(x => x * 2)

console.log(listas)