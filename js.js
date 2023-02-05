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
/* function biggestOf(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(biggestOf(5, 2, 10)); */



// losowanie dowolenj liczby od 0 do 1 bez 1
// console.log(Math.random());


//42 ∗ π
//console.log(Math.pow(4, 2) * Math.PI);



//log10(20∗30+40)
//console.log(Math.log10(20 * 30 + 40));



//log210−5
//console.log(Math.log2(Math.pow(10, -5)));




// |(−3)7|(te poziome kreski to w matematyce wartość bezwzględna)
// console.log(Math.abs(Math.pow(-3, 7)));


//funkcje jako warotoćsi
/* function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add);
console.log(typeof add);

const plus = add;
console.log(plus(1, 2)); */




//OBIEKTY

/* const user = {
    name: "Kuba",
    surname: "Wędrowicz",
    address: {
        country: "Polska",
        city: "Stary Majdan",
        postal: "22-120",
        street: "null"
    }
};

const book = {
    title: "Karpie bijem",
    releaseYear: "2019"
};

console.log(user.surname);

user.name = "Jakub";

console.log(user.name);
console.log(user.address.city);

user.address.street = "Baganowska";
console.log(user.address.street);
console.log(book.releaseYear); */





let obj = {name: "Alek"};
const obj2 = obj;

console.log(obj.name);
console.log(obj2.name);

const obj3 = {name: obj.name};
console.log(obj3);

obj = {size: "S"};
console.log(obj.name);
console.log(obj.size);
console.log(obj2.name);


