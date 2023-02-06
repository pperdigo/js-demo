# Loops
Frequentemente, você irá precisar realizar uma operação até uma determinada condição acontecer. Os loops tornam possível que você realize isso.
## **1. while**
O loop while roda um trecho de código até que uma condição retorne falso. Um exemplo simples de loop while:

```js
let contador = 0
while (contador < 10){
    console.log('Esta é a ' + contador + 'ª iteração')
    contador += 1
}
```

Sempre deve se ter muito cuidado com loops while, pois é muito fácil causar iterações infinitar com ele.

```js
let contador = 0
while (contador < 10){
    console.log('Esta é a ' + contador + 'ª iteração')
    // Esqueci de incrementar o contador. Dessa forma, ele sempre será menor que 10 e 
    // estaremos presos no loop
}
```

## **2. for**
O for loop tem a mesma funcionalidade do loop while, porém a inicialização da variável de iteração, a condição e o incremento/decremento da variável são declaradas na mesma linha, desta forma:

```js
for(let contador = 0; contador < 10, ++contador){
    console.log('Esta é a ' + contador + 'ª iteração')
}
```

## **3. continue e break**
A palavra chave `continue` possibilita que pulemos a iteração atual de um loop. Exemplo:

```js
for(let i = 0; i< 10; ++i){
    if(i === 5){
        continue
    }
    console.log('Iteração de número', i)
}
```

Já a palavra chave `break` nos tira forçadamente da execução do loop

```js
for(let i = 0; i< 10; ++i){
    if(i === 5){
        break
    }
    console.log('Iteração de número', i)
}
```

