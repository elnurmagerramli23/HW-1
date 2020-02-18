 //1 operators
//1 even numbers
function even(a,b) {
    if ( a % 2 == 0) {
        return a * b
    } else {
        return a + b
    }
}console.log("Even numbers " + even(10,2));

//2 coordinate plane
function coordinatePlane(x,y) {
    if ( x > 0 && y > 0){
        console.log("Точка с координатами Х и У принадлежат 1-ой четверти" )
    }else if ( x < 0 && y > 0) {
        console.log("Точка с координатами Х и У принадлежат 2-ой четверти" )
    }else if ( x < 0 && y < 0) {
        console.log("Точка с координатами Х и У принадлежат 3-ой четверти" )
    }else if ( x > 0 && y < 0) {
        console.log("Точка с координатами Х и У принадлежат 4-ой четверти" )
    }else if ( x === 0 && y === 0) {
        console.log("Точка с координатамми Х и У находится в центре координат");
        
    }
}console.log(coordinatePlane(0,0));

//3 sum numbers
    function sumOfNumbers(num1, num2, num3) {
        let summar = 0;
        if ( num1 > 0 ) {
            if ( num2 > 0) {
                if ( num3 > 0 ) {
                summar += num1 + num2 + num3
                }
            }
            
        }
        return summar;
}
console.log("Сумма положительных чисел",sumOfNumbers(2,6,7));




//5 assessment
function assessment(a){

if ( a > 0 && a <= 19){
console.log("F")
} else if ( a >= 20 && a <= 39){
console.log("E")
}else if ( a >= 40 && a <= 59){
console.log("D")
}else if ( a >= 60 && a <= 74){
console.log("C")
}else if ( a >= 75 && a <= 89){
console.log("B")
}else if ( a >= 90 && a <= 100){
console.log("A")
}
}console.log(assessment(23))



//2 loops
//1 even numbers with loop
let c = 0;
for ( i = 1; i <= 99; i++){
if (i % 2 == 0){
   c += i
}
}console.log(c)

let sum = 0; 
for ( let i = 1; i < 99; i++){
if ( i % 2 != 0){
continue;
}
sum++;
}
console.log( "Сумма чётных чисел = " + sum );
//2 prime numbers



//4 Factorial
function factorial(m) {
    let m = 2;
    i = 1;
    do ( i *( i+1) ) 
    while ( i < m );
    return m
    console.log
}
