//map

const numbers = [2, 4, 6, 8, 10]

const double = number => number* 2
const sum = number => number + 10
const minus = number => number - 5
const newArray2 = numbers.map(double).map(sum).map(minus)

console.log(newArray2)