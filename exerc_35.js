//usando arrow function

const somar = (n, x) => n + x 
const multiplicar = (n, x) => n * x
const subtrair = (n, x) => n - x
const dividir = (n, x) => n / x
const resto = (n, x) => n % x

const executar =(a, b) =>{
    console.log(multiplicar(a, b))
    console.log(subtrair(a, b))
    console.log(dividir(8, 2))
    console.log(resto(a, b))
    return somar(a, b)

}


console.log(executar(1, 2))
