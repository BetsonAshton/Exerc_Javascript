let lista = [10, -20, 61, -15]



function getBattery(listaParametro) {
    let battery = 50
    for (let i = 0; i < listaParametro.length; i++) {
        const element = listaParametro[i];

        if (battery + element < 100) {
            battery += element
        } else {
            battery = 100
        }
        console.log(battery)
    }
}

getBattery(lista)