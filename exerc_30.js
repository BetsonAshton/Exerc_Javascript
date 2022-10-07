const produtos = [
    { id: 1, nome: "detergente", valor: 2.0, categoria: "limpeza" },
    { id: 2, nome: "amaciante", valor: 6.5, categoria: "limpeza" },
    { id: 3, nome: "pão", valor: 2.0, categoria: "alimento" },
    { id: 4, nome: "queijo", valor: 7.0, categoria: "alimento" },
    { id: 5, nome: "leite", valor: 2.2, categoria: "alimento" }
];

const alimentos = produtos.filter(p => p.categoria === "alimento")

//console.log(alimentos.map(a => a.nome)) nesse caso vou imprimir
// só os nomes dos alimentos

console.log(alimentos)

const limpezas = produtos.filter(p => p.categoria === "limpeza")
console.log(limpezas)


const lista = produtos.filter(p => p.valor >= 0)
console.log(lista.map(v => v.valor))