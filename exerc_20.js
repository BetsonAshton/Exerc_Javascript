const user1 = {
    name: 'elias',
    idade: 22,
    cpf: '167.369.852-32'

}



const user2 = {
    name: 'betson',
    idade: 25,
    cpf: '167.551.366-17'

}

const users = [user1, user2]

console.log(users)

function getNomes(usersParametro) {

    const resultado = [usersParametro[0].name, usersParametro[1].name]

    if (resultado[0].length < resultado[1].length) {

        return resultado[0]

    } else {

        return resultado[1]


    }




}

console.log(getNomes(users))