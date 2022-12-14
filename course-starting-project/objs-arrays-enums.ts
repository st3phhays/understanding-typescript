// const person: {
    // name: string;
    // age: number;
// } = {
// const person: {
    // name: string;
    // age: number, 
    // hobbies: string[],
    // role: [number, string] // tuple type
// } = {
    // name: 'Steph',
    // age: 32,
    // hobbies: ['Coding', 'Gaming'],
    // role: [2, 'developer']
// }

enum Role { ADMIN, READ_ONLY, AUTHOR };
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; Can assign values if wanted

const person = {
    name: 'Steph',
    age: 32,
    hobbies: ['Coding', 'Gaming'],
    role: Role.ADMIN
}

// person.role.push('admin');
//person.role[1] = 10;  !! ERROR  !!
//person.role = [0, 'admin', 'user'] !! ERROR !!

let favoriteActivities: string[];
favoriteActivities = ['Coding'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}
