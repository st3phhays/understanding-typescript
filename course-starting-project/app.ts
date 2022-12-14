const add = (n1: number, n2: number) => {
    return n1 + n2;
}

// void return type. Doesn't return anything.
const printResult = (num: number) => {
    console.log('Result: ' + num);
}

printResult(add(5, 20));
