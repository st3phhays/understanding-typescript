const add = (n1: number, n2: number) => {
    return n1 + n2;
}

// void return type. Doesn't return anything.
const printResult = (num: number) => {
    console.log('Result: ' + num);
}

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 20));

// Describes what type of function is allowed to be used
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult !! ERROR !!
// combineValues === 5; !! ERROR !!

console.log(combineValues(5, 20));

addAndHandle(10, 20, (result) => {
    console.log(result);
});