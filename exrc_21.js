const user1 = {
    name: 'elias',
    idade: 22,
    cpf: '128.256.869-70'
}


const user2 = {
    name: 'betson',
    idade: 25,
    cpf: '360.887.967-56'
}

const users =[user1, user2]

console.log(users)

function listaIdade(users){

    const idadeMaior = users[0].idade < users[1].idade

    if(idadeMaior){
        return users[1].name
    }else{
        return users[0].name
    }

}

console.log(listaIdade(users))
