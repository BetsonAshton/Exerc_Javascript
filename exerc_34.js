const user1 = {
    name: 'Silva',
    idade: 22,
    cpf: '559.699.789-32'
}

const user2 = {
    name: 'Lucas',
    idade: 23,
    cpf: '487.657.370-04'
}

const user3 = {
    name: "Matheus",
    idade: 25,
    cpf: '662.987.280-05'
}

const user4 = {
    name: 'Vinicios',
    idade: 28,
    cpf: '554.494.687-65'
}

const user5 = {
    name: 'João',
    idade: 24,
    cpf: '564.484.697-66'
}

const users = [user1, user2, user3, user4, user5]

function getUsuarioMaisVelho(listaUsuarios) {

    let usuarioauxilio = listaUsuarios[0]

    for (let user of listaUsuarios) {

        if (usuarioauxilio.idade < user.idade) {

            usuarioauxilio = user
        }


    }
    return usuarioauxilio
}

function getMenorIdade(listaUsuarios){
   
    let idadeauxiliar = listaUsuarios[0].idade

    for(let user of listaUsuarios){

        if(idadeauxiliar > user.idade){

            idadeauxiliar = user.idade
        }
    }

    return idadeauxiliar

}

console.log(getMenorIdade(users))



console.log(getUsuarioMaisVelho(users))