// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primiiives

let age: number;
age = 12;

let userName: string;
userName = 'Fred';

let isStudent: boolean;
isStudent = true;

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string, 
    age: number,
    isEmployed: boolean
}

let person : Person;

person = {
    name: 'Fred',
    age: 39,
    isEmployed: true
}

let people: Person[];

// Type inference

let course = 'React - The Complete Guide'; // TypeScript infers the type as string

let courseAge: number;
courseAge = 39;

// Using Union Types

let courseName: string | number = 'React - The Complete Guide';
courseName = 39;

// Functions & types

function add(a: number, c: number): number {
    return a + c;
}

function printOutput(value: any): void {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // ['d', 'a', 'b', 'c']    

