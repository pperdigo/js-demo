# Controle de Fluxo
O nosso código tem um fluxo de execução, e é possível criar bifurcações condicionais nesse fluxo, fazendo com que trechos de código sejam executados de acordo com condições determinadas. Isso se chama controle de fluxo, e é feito por meio das declarações condicionais em JavaScript.
## Declarações condicionais
### **1. if-else**

O if-else é uma declaração condicional bastante comum em grande parte das linguagens de programação mais conhecidas, como JavaScript, C e Python. Além disso, existe a função IF no Qlik, que, apesar de ter semelhanças com o if-else das linguagens de programação, tem algumas diferenças fundamentais.

Para ilustrar uma desass diferenças, olhe para a sintaxe da função `IF()` abaixo:

```Excel
IF(condição, valor_se_verdadeiro, valor_se_falso)
```
Esta função avalia tanto o `valor_se_verdadeiro` e o `valor_se_falso`, e apenas retorna um deles de acordo com o valor de `condição`. Esse comportamento é diferente do "controle de fluxo" descrito mais cedo.

O if-else do JavaScript funciona de modo a redirecionar seu código determinada seção, de acordo com condições que você determinar. Observe o exemplo:

```js
1  let a = parseInt(prompt('Insira um valor'), 10);
2 
3  if (a<0) {
4    console.log("Menor que zero");
5  } else if (a === 0) {
6    console.log("Zero");
7  } else {
8    console.log("Maior que zero");
9  }
10
11 console.log('Fim da função.')
```
Nesse cenário, apenas o bloco de código correspondente à condição atingida é avaliado e executado. O resto não influencia a execução do código.

### **2. switch case**
O *``switch case``* é uma forma de avaliar diversas condições alternativas sem encadear diversos ``if-elses``. Sua sintaxe é:
```js
switch(valor){
    case valor1:
    //Instruções executadas quando o resultado da expressão for igual à valor1
    break;
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual à valor2
    break;
  ...
  case valorN:
    //Instruções executadas quando o resultado da expressão for igual à valorN
    break;
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    break;
}
```
O *``switch case``* compara `valor1` com ``valor`` e, caso a comparação retorne verdadeiro, o bloco de código correspondente à ``valor1`` é executado. Já caso retorne falso, a comparação segue para `valor2`, e assim por diante.

### **3. Operador ternário**
Caso desejemos atribuir um valor a uma variável baseado em outra variável, devemos fazer o seguinte utilizando ``if-else``

```js
let condicional = true
let valor

if(condicional){
    valor = 50
}
else{
    valor = 10
}
```
O operador ternário (`?`) no JavaScript permite que condensemos este trecho para apenas uma linha:

```js
let condicional = true

let valor = condicional ? 50 : 10
```
Ela funciona semelhante à função ``IF()`` do Qlik. A variável `condicional` é avaliada e, caso verdadeira, a operação ternária retorna o segundo argumento (50). Já caso falsa, a operação ternária retorna o terceiro argumento (10).

### **4. Truthiness**
O JavaScript consegue avaliar qualquer tipo de variável como booleano. Isso permite que usemos qualquer valor como condicional de um `if/else`, e o JavaScript irá converter ele para booleano seguindo a sua lógica.

Os seguintes valores retornam ``false``, portanto são considerados como *falsy*:

- `false`
- Os números zero
    - `0` zero tradicional
    - `-0` zero negativo (sim, ele existe no JS)
    - `0n` o zero do BigInt
- `''` string vazia
- `undefined`
- `null`
- `NaN`

O restante dos valores retornam ``true``, portanto são considerados como *truthy*


