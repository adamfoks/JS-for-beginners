// wypisuje sumę dwóch liczb przekazywanych jako argumenty np 5 i 4:

/*   function printSum(a, b) {
      console.log(a + b);
  }
  printSum(5, 4); */



// wypisuje kolejne liczby od a do b,gdzie a i b to parametry funkcji(zakładamy, że wartość a < b) np 2 i 4:

/* function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}
printNumbers(2, 4); */




// wypisuje określoną liczbę gwiazdek w jednej linii (np.3):

/* function printStars(num) {
    let stars = "";
    for (let i = 0; i < num; i++) {
        stars += "*";
    }
    console.log(stars);
}
printStars(3) */



// wypisuje kwadrat zgwiazdek o określonym rozmiarze np 4 i jest to połaczenie z poprzednim zadaniem:

/* function printStars(num) {
    let stars = "";
    for (let i = 0; i < num; i++) {
        stars += "*";
    }
    console.log(stars);
}
printStars()

function printSquare(size) {
    for (let i = 0; i < size; i++) {
        printStars(size);
    }
}
printSquare(4); */



// wypisuje trójkąt równoramienny z gwiazdek o określonym rozmiarze np 3:

/* function printStars(num) {
    let stars = "";
    for (let i = 0; i < num; i++) {
        stars += "*";
    }
    console.log(stars);
}
printStars()

function printTriangle(size) {
    for (i = 0; i <= size; i++) {
        printStars(i);
    }
}
printTriangle(3) */



//funkcja do kwadratu

/* function square(x) {
    return x * x;
}
console.log(square(4)); */



//funkcja do kwadratu, również liczny ujemne
/* function absolut(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
console.log (absolut(5)); */




//funkcja silni z np 4
/* function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    let acc = 1;
    for (var i = 2; i <= num; i++) {
        acc *= i;
    }
    return acc;
}
console.log(factorial()); */




// funkcja zamienia liczbę dni na liczbę milisekund (jedna sekunda to 1000 milisekund).
/* function daysToMillis(days) {
    return days * 24 * 60 * 60 * 1000;
}
console.log(daysToMillis(1)); */


// oblicza wielkość pola powierzchni trójkąta prostokątnego,na podstawie długości jego prostopadłych boków (wzór to a * b / 2).
/* function triangleArea(a, b) {
    return a * b / 2;
}
console.log(triangleArea(10, 20)); */



//zwracana większą z trzech wartości.
function biggestOf(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(biggestOf(5, 2, 10));



