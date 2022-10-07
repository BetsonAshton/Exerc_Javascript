const produtos = [
    { id: 1, nome: "detergente", valor: 2.0, categoria: "limpeza" },
    { id: 2, nome: "amaciante", valor: 6.5, categoria: "limpeza" },
    { id: 3, nome: "pão", valor: 2.0, categoria: "alimento" },
    { id: 4, nome: "queijo", valor: 7.0, categoria: "alimento" },
    { id: 5, nome: "leite", valor: 2.2, categoria: "alimento" }
  ];

       // nessa situaçao foi colocado o 0 como valor inicial pois o valor final será numero
        const produto = produtos.reduce((acc, p) => acc + p.valor, 0)

        console.log(produto)





const numeros = [1, 2, 3, 4]

//acc(acumulado e sempre o resultado da rodada anterior),
// e o numero e o proximo item do array, onde esses dois serão somados 
const total = numeros.reduce((acc, numero)=> acc + numero)

console.log(total)