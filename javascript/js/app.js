//alert("Hello");
function  square(n) {
    return n*n;
}

function  areaCircle(radius) {
    return Math.PI *square(radius);
}

function isEven(n) {
    if (n%2==0) {
        return "even";
    }
    else{
        return "odd";
    }
}

var ar= ["G","PG","PG-13","R"];

ar.forEach( function (rating) {
    console.log(rating);
}
);

var m={"red":"#F00", "green":"#0F0", "blue":"#00F"};
console.log(m);
console.log(m.red);
m.yellow = "#FF0";
console.log(m.yellow);


console.log(isEven(5));
console.log(areaCircle(50));