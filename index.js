 //1 operators
//1.1 even numbers
function even(a,b) {
    if ( a % 2 == 0) {
        return a * b
    } else {
        return a + b
    }
}console.log( "Even numbers ",even(10,2));

//1.2 coordinate plane
function coordinatePlane(x,y) {
    if ( x > 0 && y > 0){
        console.log( "Точка с координатами Х и У принадлежат 1-ой четверти" )
    }else if ( x < 0 && y > 0) {
        console.log( "Точка с координатами Х и У принадлежат 2-ой четверти" )
    }else if ( x < 0 && y < 0) {
        console.log( "Точка с координатами Х и У принадлежат 3-ой четверти" )
    }else if ( x > 0 && y < 0) {
        console.log( "Точка с координатами Х и У принадлежат 4-ой четверти" )
    }else if ( x === 0 && y === 0) {
        console.log( "Точка с координатамми Х и У находится в центре координат");
        
    }
}console.log(coordinatePlane(0,0));

//1.3 sum numbers
function sumOfNumbers( num1, num2, num3 ) {
    let result = 0;

    if(num1 > 0) {
        result += num1
    }
    if(num2 > 0) {
        result += num2
    }
    if(num3 > 0) {
        result += num3
    } 
    
    return result
}console.log( "Сумма положительных чисел", sumOfNumbers(2,-6,7) );
//1.4 max sum
function maxSum( numb1, numb2, numb3 ) {
    let ints = numb1 + numb2 + numb3;

    let ints2 = numb1 * numb2 * numb3;

    let inst3 = 0;

    if ( ints > ints2 ) {
        inst3 += ints + 3
    } else if ( ints2 > ints ) {
        inst3 += ints2 + 3
    } return inst3
}console.log( "Максимальное выражение равно", maxSum(1,1,2) );

//1.5 assessment
function assessment(abc){
if ( abc > 0 && abc <= 19){
console.log("Оценка студнта равна F")
} else if ( abc >= 20 && abc <= 39){
console.log("Оценка студнта равна E")
}else if ( abc >= 40 && abc <= 59){
console.log("Оценка студнта равна D")
}else if ( abc >= 60 && abc <= 74){
console.log("Оценка студнта равна C")
}else if ( abc >= 75 && abc <= 89){
console.log("Оценка студнта равна B")
}else if ( abc >= 90 && abc <= 100){
console.log("Оценка студнта равна A")
}
}console.log(assessment(23))

//2 loops
//2.1 even numbers with loop

let c = 0;

for ( i = 1; i <= 99; i++){
if (i % 2 == 0){
   c += i
}
}console.log("Количество чётных чисел равна", c)

let sum = 0; 

for ( let i = 1; i < 99; i++){
if ( i % 2 != 0){
continue;
}
sum++;
}
console.log( "Сумма чётных чисел равна ", sum );


//2.2 prime numbers

function primeNum(num) {
    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0) {
            return false;
        }else{
            return true;
        }
}
}
console.log(primeNum(10));


//2.3

//2.4
function factorial( num1 ) {
    let resFactorial = 1;
    for (let i = 1; i <= num1; i++) {
        resFactorial = resFactorial * i 
       }return resFactorial
}console.log("Фактораил вводимого числа равен", factorial(3));

//2.5


function sumNumbers(num) {
    let sumOfNum = 0;

    let remainder = 0;

    while ( num>= 0 ) {
        remainder = num % 10;
        num = ( num - remainder)/10;
        sumOfNum += remainder;
        if (!num) {
            return sumOfNum
    }
    
    }
}console.log("Сумма чисел заданного числа равна", sumNumbers(103));

//
