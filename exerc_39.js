const menu = [
    { nome: "Frango", preco: 39.90 },
    { nome: "Carne", preco: 59.90 },
    { nome: "Risoto", preco: 88.70 },
    { nome: "bolo", preco: 24.90 },
    { nome: "Doce de Leite", preco: 9.90 },
    { nome: "bonbom", preco: 17.90 },

]

const pedido = [1, 5, 2, 1, 3]

let valorTotal = 0

pedido.forEach(numeroItenMenu => {

    console.log(menu[numeroItenMenu])

    valorTotal += menu[numeroItenMenu].preco

});


console.log(valorTotal)