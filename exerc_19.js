const user = {
    nome: "thiago santos",
    idade: 27,
    height: 1.80,
    
} 

const  user2 = {
    nome:"Marcos silva",
    idade: 23,
    height:1.70
    
}

//const interestTiago =  ["jogarPc, verSeries, praia, cinema"]

//const interestMarcos = ["jogarPc, verSeries, praia, cinema"]

function  compararAltura(u1, u2){

    const comparacao = u1.height > u2.height

    if(comparacao){
        return `${u1.height} é maior que altura de Marcos que é  ${u2.height}`
    }else{

        return `${u2.height} é maior que altura de Tiago que é ${u1.height}`
    }
}

console.log(compararAltura(user, user2))

function compararIdade(u1, u2){

    const comparacao = u1.idade > u2.idade

    if(comparacao){
        return `${u1.idade} é maior que idade de Marcos que é ${u2.idade}`
    }else{
        return `${u2.idade} é maior que idade de Thiago que é ${u1.idade}`
    }
}
console.log(compararIdade(user, user2))
