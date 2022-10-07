const user1 = {
    name: "jorge",
    id: 1,
    email: "jorge@gmail.com"
}

const user2 = {

    name: "Matheus",
    id: 2,
    email: "Matheus@gmail.com"

}

function getObject(primeiroUsuario, segundoUsuario) {

    const usuarios = []
    usuarios.push(primeiroUsuario)
    usuarios.push(segundoUsuario)

    return usuarios
}

console.log(getObject(user1, user2))