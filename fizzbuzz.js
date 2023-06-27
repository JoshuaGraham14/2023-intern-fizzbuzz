// This is our main function
function fizzbuzz() {
    let s=""
    for (let i = 1; i <= 100; i++) {
        s=""
        if (isDiv(i,3)) {
            s+="Fizz";
        }
        if (isDiv(i,5)) {
            s+="Buzz";
        }
        if (isDiv(i,7)) {
            s+="Bang";
        }
        if (isDiv(i,3) || isDiv(i,5) || isDiv(i,7)) {
            console.log(s);
        } else {
            console.log(i);
        }
    }
}

function isDiv(x,y) {
    return (x%y === 0) ? true : false
}

// Now, we run the main function:
fizzbuzz();

