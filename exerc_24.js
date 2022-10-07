const user1 = {
    name: 'elias',
    idade: 22,
    cpf: '559.699.789-32'
}

const user2 = {
    name: 'betson',
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
    name: 'radigo',
    idade: 24,
    cpf: '564.484.697-66'
}

const users = [user1, user2, user3, user4, user5]

function getUsuarioMaisVelho(listaUsuarios) {

    let usuarioAuxiliar = listaUsuarios[0]

    //variavel user usado como parametro existe dentro do for
    for (let user of listaUsuarios) {

        if (usuarioAuxiliar.idade < user.idade) {

            usuarioAuxiliar = user
        }
    }
     return usuarioAuxiliar
}
console.log(getUsuarioMaisVelho(users))