// Trainning: http://kursjs.pl/

let a = 0;

function myF() {
    let b = 0;
    a++;
    b++;
    console.log(`a: ${a}, b: ${b}`);
}

myF(); //a: 1, b: 1
myF(); //a: 2, b: 1
myF(); //a: 3, b: 1
myF(); //a: 4, b: 1



const tab = [1,2,3];
tab.length //widzisz kropkę? Przez nią odwołujemy się do metod lub właściwości obiektu - w tym przypadku obiektu typu Array

const text = "Ala ma kota";
console.log(  text.charAt(0) ); //text - typ prosty został na chwilę zamieniony na obiekt (po czym od razu po wykonaniu akcji wrócił do typu prostego)

window.innerHeight //właściwość innerHeight obiektu window

Math.floor(21.3); //metoda obiektu Math

document.cookie //właściwość cookie obiektu document

button.innerHTML //właściwość innerHTML obiektu button


