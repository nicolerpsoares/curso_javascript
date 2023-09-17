
# Exercícios Aula 01 do Módulo 01 




#### 01 - Declare uma marcação HTML básica no arquivo index.html usando o atalho ! + TAB no VSCODE:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### 02 - Modifique a linguagem para português-brasil:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### 03 - Remova as meta tags desnecessárias:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### 04 - Modifique o tittle para "Exercício 01":

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title> Exercício 01 </title>
</head>
<body>
    
</body>
</html>
```

#### 05 - linke o arquivo, app.js, antes do fechamento da tag body: 

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title> Exercício 01 </title>
</head>
<body>
<script src="app.js"></script>
</body>
</html>
```

#### 06 - Para se certificar que o arquivo app.js realmente está linkado, exiba a frase "JS is Awesome" através de um alert. 

HTML:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title> Exercício 01 </title>
</head>
<body>
<script src="app.js"></script>
</body>
</html>
```
JS:

```javascript
alert("JS is Awesome");

```

#### 07 - Comente o alert que você escreveu acima, utilizando o método de comentário de uma linha:

HTML:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title> Exercício 01 </title>
</head>
<body>
<script src="app.js"></script>
</body>
</html>
```
JS:

```javascript
//alert("JS is Awesome");

```

#### 08 - Declare uma const "myBirthYear", que recebe o ano do seu nascimento, com quatro dígitos. Ex.: 1960

```javascript
const myBirthYear = 1997;

```

#### 09 - Declare uma const "currentYear", que recebe o ano atual, com 4 dígitos. 

```javascript
const currentYear = 2023;

```

#### 10 - Exiba as const "myBirthYear" e "currentYear", lado a lado, no console do browser. 

```javascript
const myBirthYear = 1997;
const currentYear = 2023;
console.log(myBirthYear, currentYear);

```

#### 11 -  Declare uma constante chamada "myAge", que recebe o ano atual subtraído pelo ano do nascimento. Mas sem digitar os números manualmente. Em seguida exiba a const "myAge" no console. 

```javascript
const myBirthYear = 1997;
const currentYear = 2023;

const myAge = currentYear - myBirthYear; 
console.log(myAge);

```

