
const user1 = {
    id: 1,
    nome: "Elias",
    email: "edvaldo@gmail.com"

}

const user2 = {
    id: 2,
    nome: "Rogério",
    email: "rogerio@gmail.com"
}

const user3 = {
    id: 3,
    nome: "Rodrigo",
    email: "rodrigotherock@gmail.com"
}

const users = [user1, user2, user3]

function getUsuario(userList, nameUser) {

    let achouNome = false
    userList.forEach((u) => {
        if (nameUser == u.nome) {
            achouNome = true
        }
    });
    return achouNome

}

console.log(getUsuario(users, "Elias"))