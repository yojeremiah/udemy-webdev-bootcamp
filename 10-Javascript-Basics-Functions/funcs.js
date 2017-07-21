// functions problem set
function isEven(num){
    if (num % 2 === 0 ){
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(3));

function factorial(x){
    if (x === 0) {
        return 1;
    }
    for (var i = x - 1; i > 1; i--){
        x = x * i;
    }
    return x;
}
console.log(factorial(5));
console.log(factorial(0));

function kebabToSnake(text){
    // for (var i = 0; i < text.length; i++){

    // }
    return (text.replace(/-/g, "_"));
}
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));

// Higher-Order Functions: pass function into another function
function sing(){
    console.log("Twinkle twinkle");
    console.log("Little little");
}
var stop = setInterval(sing, 1000);