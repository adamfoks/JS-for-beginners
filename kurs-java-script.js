// Trainning: http://kursjs.pl/

function getStatus(number) {
    if (number < 20) {
        return "bad"
    }

    if (number < 30) {
        return "medium"
    }

    return "good"
}

console.log(getStatus(10));
console.log(getStatus(25));