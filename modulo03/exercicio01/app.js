/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

function multiplication (x = 0,y = 0) {
  return x * y;
}

const resultMultiplication = multiplication()
console.log(resultMultiplication)



/*function
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const resultDivisor = function ( x = 0, y = 0){
  return x / y
}

console.log(resultDivisor)
console.log(resultDivisor(6, 3))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

const showString = function (time = 0){
  for (let i = 1; i<= time; i++){
    console.log(`Esta é a ${i}° vez que esta string é exibida!`)
  }
 } 

showString(7)

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

function wordsUpperCase(array) {
  const result = [];
  for (let i = 0; i < array.length; i++){
    result.push(array[i].toUpperCase());
  }
  return result
}

const result = wordsUpperCase(millennialWords); 
console.log(result)


/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

function checkNumbers(array) {
  let positiveNumbers = []; 
  let negativeNumbers = [];
  for (let i = 0; i <randomNumbers.length; i++){
    if (randomNumbers[i] > 0) {
      positiveNumbers.push(randomNumbers[i]) 
    } else {
      negativeNumbers.push(randomNumbers[i])
    }
  }
  return {
    resultPositiveNumbers: positiveNumbers,
    resultNegativeNumbers: negativeNumbers,
    resultTotal: array.length
  }
  }
  
  const resultCheckNumbers = checkNumbers(randomNumbers)

  console.log( `O array "randomNumbers" possui ${resultCheckNumbers.resultTotal} números, sendo ${resultCheckNumbers.resultPositiveNumbers} positivos e ${resultCheckNumbers.resultNegativeNumbers} negativos.`)
/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

function getOddNumbers(array) {
  const oddNumbers = array.filter(function(number) {
    return number % 2 !== 0;
  });
  return oddNumbers;
}

const inputArray = [83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42];
const resultArray = getOddNumbers(inputArray);
console.log(resultArray);

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }]

  let frase = '';
  
  for (let i = 0; i < functions.length; i++) {
    frase += functions[i]();
    if (i !== functions.length - 1) {
      frase += ' ';
    }
  }
  
  console.log(frase);
  
