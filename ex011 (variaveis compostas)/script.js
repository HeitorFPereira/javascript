
var a = [1, 2, 3, 4, 5]
a.push(6) //Adiciona o numero colocado entre parenteses no final na lista.
a.sort() //Organiza os elementos da lista em ordem crescente.
console.log(`Nosso vetor é ${a.length}`) //Conta a quantidade de elementos presentes, lembrando que a casa dos elementos sempre começara em 0.
console.log(`Nosso vetor de posição 4 é ${a[4]}`) //Neste caso o número que se encontra entre colchetes é a casa, ou seja, ele ira mostrar apenas a variavel A que oucupa a posição 4.

var pos = a.indexOf(5) //indexOf procura o elemento entre parenteses na lista e retorna a sua casa.

console.log(`O valor 5 está na posição ${pos}`)


