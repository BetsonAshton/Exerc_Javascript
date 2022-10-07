let vb = 1500
let vv = 750
let vn = 750
let QtdHab =3000
let total =  vb + vv + vn 

let Pb = vb * 100/total
let Pv = vv * 100/total
let Pn = vn *100/total

console.log(total + " Habitantes")
console.log(" Votos brancos " + Pb + "% " + "Votos validos " + Pv + "% " + "Votos nulos " + Pn + "%")