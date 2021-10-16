a = +prompt();
b = +prompt(); 
h = +prompt();
sumOfFactorials = a+b+h; 

toStart: for(; a<=b; a+=h) {

    for(j=1; j<a; j++) {
        console.log (`  ${j}`);
        factorial *= a;
        if(a%j === 0) {
            continue toStart;
        }
    }

    console.log(`${a}! = ${sumOfFactorials}`);
}