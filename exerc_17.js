let lista1 = [2, 5, 6, 7]
let lista2 = [1, 3, 4, 8]

function listaparametro(list1, list2){

    const compararlista = list1[0] > list2[0]

    if(compararlista){
        return list1[0] + list2[0]
    }else{
        return list1[1] + list2[1]
    }
}

console.log(listaparametro(lista1, lista2))