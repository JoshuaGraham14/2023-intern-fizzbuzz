// This is our main function
function fizzbuzz() {
    let s=""
    for (let i = 1; i <= 200; i++) {
        s=""

        if (isDiv(i,11)) {
            s="Bong";
            s=isFezz(i, s);
            console.log(s);
            continue;
        }

        if (isDiv(i,3)) {
            s+="Fizz";
        }
        if (isDiv(i,5)) {
            s+="Buzz";
        }
        if (isDiv(i,7)) {
            s+="Bang";
        }

        s=isFezz(i, s);

        if (isDiv(i,3) || isDiv(i,5) || isDiv(i,7) || isDiv(i, 13)) {
            console.log(s);
        } else {
            console.log(i);
        }
    }
}

function isDiv(x,y) {
    return (x % y === 0)
}

function isFezz(i, s) {
    if (isDiv(i,13)) {
        let index = s.indexOf("B");
        if (index === -1) {
            index=0
        }
        s = s.slice(0, index) + "Fezz" + s.slice(index);
    }
    return s
}

// Now, we run the main function:
fizzbuzz();