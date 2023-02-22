// Trainning: http://kursjs.pl/

const nr = 123.456789;

nr.toFixed()      // "123"
nr.toFixed(0)     // "123"
nr.toFixed(1)     // "123.5"
nr.toFixed(2)     // "123.46"
nr.toFixed(3)     // "123.457"
nr.toFixed(4)     // "123.4568"
nr.toFixed(5)     // "123.45679"
nr.toFixed(6)     // "123.456789"
nr.toFixed(7)     // "123.4567890"
nr.toFixed(8)     // "123.45678900"
nr.toFixed(9)     // "123.456789000"
nr.toFixed(10)    // "123.4567890000"
nr.toFixed(11)    // "123.45678900000"

nr.toPrecision()      // "123.456789"
// nr.toPrecision(0)     // błąd, parametr musi być z przedziału 1-100
nr.toPrecision(1)     // "1e+2"
nr.toPrecision(2)     // "1.2e+2"
nr.toPrecision(3)     // "123"
nr.toPrecision(4)     // "123.5"
nr.toPrecision(5)     // "123.46"
nr.toPrecision(6)     // "123.457"
nr.toPrecision(7)     // "123.4568"
nr.toPrecision(8)     // "123.45679"
nr.toPrecision(9)     // "123.456789"
nr.toPrecision(10)    // "123.4567890"
nr.toPrecision(11)    // "123.45678900"