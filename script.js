
let age = 18
let captcha = "human"
let birthday = "august"
let namer = "amilton"
let frstLetter = namer.substring(0,1)

if(age > 18){

  //1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
  console.log('welcome our website')

} else {

  console.log("you are not alowed to join us yet. come back when you're 19.")

}

if(captcha === "humano" && age >18 ){

  //2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
  console.log(captcha == "humano")
  console.log("Congrats! You're human and of age.")

} else{

  console.log("fulfill the requirement to be human and of age")

}

if (birthday === "december" || birthday === "january"){

  //3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
  console.log(`Wow, you were born in ${birthday}`)

} else{

  console.log(`What a pity. You weren't born in december or january. But you were born in ${birthday}! Congrats!`)

}

//*** Exercícios bônus

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

if (frstLetter == "r" || frstLetter == "R"){
  console.log(`hummmm your name starts with the letter "r". Let me guess... your name is ${namer}?`)
} else {
  console.log('I only guess names that contain the letter "r".')
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E