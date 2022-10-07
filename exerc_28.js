let obj = [30, 20, 80, 70,90]

for(let o in obj){
    console.log(o)
}
const user = {
    nome: "Jorge",
    idade: 23
}

for(let i in user){
    console.log(user[i])
}

let names = ["Luis", "Sandra", "Jorge"]

for(let name in names){
    console.log(names[name])


    //console.log(name) nessa situação será impresso quantos indices tem na lista(em numero)
    // e nao o que tem dentro da lista
}