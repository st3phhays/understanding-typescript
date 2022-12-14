let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Steph';
//userName = userInput; !! ERROR !!

if (typeof userInput === 'string') {
    userName = userInput;
}

const generateError = (message: string, code: number) => {
    throw {message: message, errorCode: code}
}

generateError('An error occurred', 500);