function numero(nb1){
  let nb1 = prompt ("Digite um numero")
  
  if(n1 % 2 == 0){
    console.log("O numero" + nb1 + "é par")
  } else {
  console.log("O numero " + nb1 + " é impar")
} }

function calculadora(n1,n2){
  let n1 = prompt ("Digite um numero")

  let n2 = prompt ("Digite outro numero")
  
  if(typeof n1 === "number" && typeof n2 === "number"){
    const res = n1 + n2
    console.log("total: " + res)
  }else {
    console.log("erro")
  }}

function soma(nm1,nm2){
  let nm1 = prompt ("Digite um numero")

  let nm2 = prompt ("Digite outro numero")
    const res = nm1 + nm2
    console.log("total: " + res)
}

// numero(nb1)

//calculadora(n1,n2)

soma()



