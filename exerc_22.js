const user1 = {
    name: 'elias',
    idade: 32,
    cpf: '165.894.888-70'
}

const user2 = {
    name: 'betson',
    idade: 35,
    cpf: '544.444.587-70'
}

const user3 = {
    name: 'Vinicios',
    idade: 28,
    cpf: '554.494.687-65'
}

const users = [user1, user2, user3]

console.log(users)

function mostrarUsuarioMaisNovo(abacaxi){

    const eliasEhMaisNovo = abacaxi[0].idade < abacaxi[1].idade && abacaxi[0].idade < abacaxi[2].idade
    const betsonEhMaisNovo = abacaxi[1].idade < abacaxi[0].idade && abacaxi[1].idade < abacaxi[2].idade
    const viniciosEhMaisNovo = abacaxi[2].idade < abacaxi[1].idade && abacaxi[2].idade < abacaxi[0].idade
    

    if(eliasEhMaisNovo ){
     console.log(abacaxi[0].name)
        
        
    }else if(betsonEhMaisNovo){
        console.log(abacaxi[1].name)
        
    }else if(viniciosEhMaisNovo){
        console.log(abacaxi[2].name)

    }
}

mostrarUsuarioMaisNovo(users)
