// a = +prompt();
// b = +prompt(); 
// h = +prompt(); 
// sumOfFactorials = 0;

// toStart: for(; a<=b; a+=h) {

//     for(j=1; j<a; j++) {
//         console.log (`  ${j}`);
//         if(a%j === 0)
//         {
//             continue toStart;
//         }
//     factotial = 1;

//     for (i=1; i<=a; i++) {
//         factotial = factotial * i;
//         //console.log (i, factotial);
//     }

//     //считаем сумму
//         if ((i - start) % step == 0) {
//             sumOfFactorials += factorial;
//         }
    
//     }

    
//     }
    

// }
// console.log (sum+=factotial);


// function sumFactorials(start, finish, step) {
//     let sum = 0;
//     let factorial = 1;
 
//     // считаем факториал
//     for (let i = 1; i < start; i++) {
//         factorial *= i;
//     }
 
//     // перебираем числа
//     for (let i = start; i <= finish; i ++) {
        
//         // считаем факториал
//         factorial *= i;
 
//         // считаем сумму
//         if ((i - start) % step == 0) {
//             sum += factorial;
//         }
//      }
 
//      return sum;
//  }

// a = +prompt();
// b = +prompt(); 
// h = +prompt(); 

// sumOfFactorials = 0;
// sum = 0;
// factotial = 1;

// toStart: for(; a<=b; a+=h) {

// // считаем факториал
//     for ( a = 1; a <=10; a++) {
//         factorial *= ;
//     }

//     //перебираем числа
//     for ( i = 1; i <= a; i++) {
        
//         // считаем факториал
//         factorial *= i;
 
//         // считаем сумму
//         if ((i - start) % step == 0) {
//             sum += factorial;
//         }
//      }
// } 
//     console.log (sum);






// let sum = 0;
// let arr = [];
// let factorial = 1;

// function getSumFactorial(start, finish, step) {

//     // заполняем массив arr нужными числами
//     for (let i = start; i <= finish; i += step) {
//         arr.push(i);
//     }
//     // проходимся по елементам массива arr
//     for (let j = 0; j < arr.length; j++) {
//         // считаем факториал каждого числа с массива
//         for (let k = 1; k <= arr[j]; k++) {
//             factorial *= k;
//         }
//         sum = sum + factorial;
//     }
//     return sum;

// }

// console.log(getSumFactorial(1, 5, 3));

// a = +prompt();
// b = +prompt(); 
// h = +prompt(); 
// sumOfFactorials = 0;

// toStart: for(; a<=b; a+=h) {
//     for(j=1; j<a;j++) {
//         console.log (`  ${j}`);
//         if(a%j === 0) 
//     }
//     continue toStart;
//     }

a = +prompt(); 
b = +prompt(); 
h = +prompt(); 
sumOfFactorials = 0;
toStart: for(; a<=b; a+=h) {



    for(j=2; j<a; j++) {
        //console.log (`  ${j}`);
        if(a%j === 0) {
            continue toStart;
        }
    }
    factotial = 1;

    for (i=1; i<=j; i++) {
        factotial = factotial * i;
        //console.log (i, factotial);
        //console.log(a);
    }
    sumOfFactorials += factotial;
}

console.log (sumOfFactorials += factotial);