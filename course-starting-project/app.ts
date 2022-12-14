// const person: {
    // name: string;
    // age: number;
// } = {
const person = {
    name: 'Steph',
    age: 32,
    hobbies: ['Coding', 'Gaming']
}

let favoriteActivities: string[];
favoriteActivities = ['Coding'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
