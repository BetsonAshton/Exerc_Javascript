const lista = [30, 60, 80, 90, 100, 70]

const valor = lista.reduce((i, p) => i + p, 0)

console.log(valor)


const produtos = [
{serie: 1, nome:"Feijão", valor: 5.00, categoria: "alimento"},
{serie: 2, nome:"Arroz", valor: 8.00, categoria: "alimento"},
{serie: 3, nome:"Filé de Frango", valor: 25.00, categoria: "alimento"},
{serie: 4, nome:"Guaraná", valor: 6.50, categoria: "refrigerante"},
{serie: 5, nome:"Coca-Cola", valor: 4.50, categoria: "refrigerante"},
{serie: 6, nome:"Fanta Laranja", valor: 6.90, categoria: "refrigerante"}

]

const nomes = produtos.map(produto => produto.nome)
const valores = produtos.filter(p => p.valor > 0 )
console.log(valores[0].valor + " Reais")
console.log(nomes[0])