# Arrays
## Definição
Arrays são listas ordenadas de elementos que podem ser de qualquer tipo de dados.

```js
let minhaArray = [0, 1, '2', [3, 4], {valor: 5}]
```

Cada elemento de uma array tem um índice próprio, que começa no **zero**.

## Acessando elementos
Para acessar elementos de uma array, usamos o operador ``[]``

```js
let minhaArray = [0, 1, '2', [3, 4], {valor: 5}]

console.log(minhaArray[3])
```

Para acessar o último elemento da array quando não sabemos quantos elementos ela tem, podemos usar a propriedade `length` da array:

```js
let minhaArray = [0, 1, '2', [3, 4], {valor: 5}]

let lastElementIndex = minhaArray.length - 1
console.log(minhaArray[lastElementIndex])
```

## Métodos comuns
### 1. push() x concat()
Servem para adicionar elementos ao final de uma array
### 2. pop()
Remove o último elemento da array
### 3. splice()
Substitui elementos de uma array por outros
### 3. includes()
Checa se a array inclui um elemento
### 4. sort()
Ordena a array
### 5. slice()
"Copia e cola" os conteúdos de uma array
### 6. reverse()
Inverte uma array
## Métodos de iteração
### 1. forEach() e map()

Usados para aplicar uma função sobre cada elemento de uma array, porém com comportamentos diferentes.

- forEach não tem retorno e serve para executar efeitos colaterais baseados nos elementos da array

```js
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });
```

- map tem retorno e serve para fazer uma cópia da array original

```js
let minhaArray = [1, 2, 3]
let retorno = minhaArray.map((num) => {
    return num + 1 
})

console.log(minhaArray)
console.log(retorno)
```

### 2. filter()

Serve para criar uma cópia filtrada da array com base em uma condição

```js
let minhaArray = [1, 2, 3]
let retorno = minhaArray.filter((num) => num === 1)

console.log(minhaArray)
console.log(retorno)
```
