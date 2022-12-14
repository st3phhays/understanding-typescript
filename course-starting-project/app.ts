const add = (n1: number, n2: number) => {
    return n1 + n2;
}

// void return type. Doesn't return anything.
const printResult = (num: number) => {
    console.log('Result: ' + num);
}

printResult(add(5, 20));

// Describes what type of function is allowed to be used
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult !! ERROR !!
// combineValues === 5; !! ERROR !!

console.log(combineValues(5, 20));