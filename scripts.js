// a = 0;
// b = 0;
// h = 0;

// a = prompt (`Enter value a`);

// do {
//     b = prompt (`Enter value b`);
// } while (b<a);

// for (a=5, b=10; a<=b; a += 1) {
//     console.log (a);
// }

// arr = [10,20,30,40,50];

// for (i=0; i<arr.length; i+=4) { //сам перебор массива, на место i можно ставить любое значение
//     console.log (arr[i]);
// }



a = +prompt(); //5
b = +prompt(); //10
h = +prompt(); //-1

toStart: for(; a<=b; a+=h) {

    
    
    for(j=2; j<a; j++) {
        console.log (`  ${j}`);
        if(a%j === 0) {
            continue toStart;
        }
    }

    console.log(a);
}

//делаем калькулятор
// do {
//     znak = prompt (`Enter one of operation +,-,*,/`);
//     znak = znak ? znak.trim() : ``;
// } while (znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/');

// console.log (znak);

// a =10;
// b =20;

// switch (znak) {
//     case '+':
    
// }