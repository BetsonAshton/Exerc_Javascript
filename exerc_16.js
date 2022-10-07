let user ={
    nome : 'Roberto',
    idade: 21,
    ehAdmin: true 
}

let user2 = {
    nome:'Elias',
    idade: 22,
    ehAdmin: true
}

function comparacao(u1, u2){

    const comparacaonome = u1.nome.length > u2.nome.length
    
    if(comparacaonome){
        return `${u1.nome} é maior que o nome  ${u2.nome}`
    }else{
        return `${u2.nome} é maior que roberto  ${u1.nome}`
    }
}

console.log(comparacao(user, user2))


let lista = [5, 4, 6, 7]