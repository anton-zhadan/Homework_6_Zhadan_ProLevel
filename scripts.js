a = +prompt(); 
b = +prompt(); 
h = +prompt(); 
sumOfFactorials = 0;
for(; a<=b; a+=h) {
    factotial = 1;
    for (i=1; i<=a; i++) {
        factotial = factotial * i;  
    }
    sumOfFactorials += factotial;
}

console.log (sumOfFactorials);