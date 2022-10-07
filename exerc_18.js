let  lista = [10, 1, 2, 5]

function executar(array){
    const ultimo = array[array.length - 1]
    const penultimo = array[array.length - 2]
    const antepenultimo = array[array.length - 3] 

    const soma = ultimo + penultimo + antepenultimo

    if(soma > 30){
     return "A"
    }else if(soma >= 15){
        return  "B"
    }else{
        return  "C"
    }
}

console.log(executar(lista))