# Objetos
## Definição
Objetos são conjuntos de pares chave-valor. Podemos definir objetos da seguinte forma:

```js
let pessoa = {
    nome: 'João',
    idade: 31,
    filhos: [
        {
            nome: 'Enzo',
            idade: 6
        },
        {
            nome: 'Valentina',
            idade: 4
        }
    ]
    
}
```
## Acessando elementos
Existem duas formas de acessar valores por meio de suas chaves correspondentes:
1. Notação de ponto

```js
let pessoa = {
    nome: 'João',
    idade: 31,
    filhos: [
        {
            nome: 'Enzo',
            idade: 6
        },
        {
            nome: 'Valentina',
            idade: 4
        }
    ]
    
}

console.log(pessoa.idade)
```

2. obj[key]

```js
let pessoa = {
    nome: 'João',
    idade: 31,
    filhos: [
        {
            nome: 'Enzo',
            idade: 6
        },
        {
            nome: 'Valentina',
            idade: 4
        }
    ]
    
}

console.log(pessoa[idade])
```

