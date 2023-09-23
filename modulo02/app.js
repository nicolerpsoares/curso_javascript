/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(true, false)
console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']

if (!animals.includes('leão')){
  console.log(`Leão não existe no array animals.`)
} else {
  console.log(`Existe um leão no array animals.`)
}

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]

let sumNumbers = 0; 

for (i = 0; i<randomNumbers.length; i++){
  sumNumbers += parseInt(randomNumbers[i]) 

  if (sumNumbers > 400){
    console.log(`A soma ultrapassou 400. Até aqui, o valor atual é ${sumNumbers}`)
    break
  } else { 
    console.log(`A soma é ${sumNumbers}`)
  }

}

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']

let newSentence = " "

for (i = 0; i < sentence.length; i++) {
  if (sentence[i] === 'certeza'){
    continue
  }
newSentence += `${sentence[i]} `
    
}
console.log(newSentence)


