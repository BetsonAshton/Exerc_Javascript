const menu = [
    { nome: "Frango", preco: 39.90 },
    { nome: "Carne", preco: 59.90 },
    { nome: "Risoto", preco: 88.70 },
    { nome: "bolo", preco: 24.90 },
    { nome: "Doce de Leite", preco: 9.90 },
    { nome: "Arroz", preco: 10.90 }

]

let precoTotal = 0

const pedido = [2, 4, 1, 3]

pedido.forEach(itemSelecionados => {

    precoTotal += menu[itemSelecionados].preco



});

console.log(precoTotal)