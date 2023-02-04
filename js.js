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

function printStars(num) {
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
printTriangle(3)