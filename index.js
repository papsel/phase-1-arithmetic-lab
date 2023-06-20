function multiply(){
    const num1 = 31;
    const num2 = 2;
    return num1 * num2
}
const result =multiply();
console.log(result)

function random(){
    return Math.floor(Math.random()* Number.MAX_SAFE_INTEGER) + 1;
}
const randomNumber = random()
console.log(randomNumber);

function mod(){
    return num3 % num4
    
}
const num3 = 19
const num4 = 5;
const remainder = mod(num3,num4)
console.log(remainder)

function max(numbers){
    return Math.max(...numbers)
}
const numbersSet= [11,8,6,3,20];
const highestNumber =max(numbersSet);
console.log(highestNumber);