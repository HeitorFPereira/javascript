let num = [3, 4 ,2, 6, 7]
num.sort()

/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}