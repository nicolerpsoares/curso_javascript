
# Resumo Aula 01 do Módulo 01 


## Para quem é o curso cj?

- Desenvolvedores que desejam aprender sobre javascript 
- Aspirantes que desejam iniciar na carreira de desenvolvimento a partir do javascript

## Com JS, você consegue realizar no Browser:

- Melhorar a Experiência do Usuário
- Adicionar interatividade às páginas
- Buscar e Exibir Dados

## O que é um Servidor:

É um outro computador que contém todos os arquivos que o website precisa. 

## Ciclo request - response:

Quando Abrimos o browser e digitamos um endereço de um website, ao clicar ENTER estaremos enviando uma request (requisição) para o web-server (outro computador) que por fim responde (response) que contém o html, o css, o js, e os demais arquivos do website.

## Como adicionar o js numa página html:

Pode ser em qualquer lugar da tag head ou da tag body.

#### Prefira escrever a tag script sempre no final da tag body

```html
<html>
<head> 
</head>
<body>
<script src= "app.js"></script> 
<body>
<html>
```

A atributo "src" no tag script Mostra o caminho para buscar o código js;

## Variavel:

O papel de uma variavel: Armazenar um valor para você. 

Formas de declarar variáveis: 

```javascript
let age = 31 
```
 (deixa essa variavel age armazenar o número 31. Outa forma de expor é age recebe  o valor de 31). 

```javascript
let age = 31 
let currentYear = 2019 

console.log(age, currentYear)

age = 32 
```
(o código vai vai ler que foi declarado no topo do código e foi feito retribuição o valor dessa variável) 

## Constante:

```javascript
const points = 100 
//Quando tentar atribuir um novo valor para a constante points vai dar erro.
```
