const user1 = {
    name: 'elias',
    idade: 22,
    cpf: '559.699.789-32'
}




const user2 = {
    name: 'betson',
    idade: 25,
    cpf: '487.657.370-04'
}

const user3 ={
    name: "Matheus",
    idade: 25,
    cpf: '662.987.280-05'
}

const users = [user1, user2, user3]

function mostrarMaiorNome(usuarios){

    const MenorNome1 = usuarios[0].name.length < usuarios[1].name.length && usuarios[0].name.length < usuarios[2].name.length
    const MenorNome2 = usuarios[1].name.length < usuarios[0].name.length && usuarios[1].name.length < usuarios[2].name.length
    //const MenorNome3 = nomes[2].name.length < nomes[1].name.length && nomes [2].name.length < nomes[0].name.length

    if(MenorNome1){
        console.log(usuarios[0].name)

    }else if(MenorNome2){
        console.log(usuarios[1].name)
    }else{
        console.log(usuarios[2].name)
    }


}

mostrarMaiorNome(users)
