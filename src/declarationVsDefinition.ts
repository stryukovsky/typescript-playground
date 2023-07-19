interface Person {
    name: string;
    surname: string;
}

let declaration: Person = {name: "Dima", surname: "Stryukovsky "};
let definition = {name: "Dima", surname: "Stryukovsky"} as Person;

// This string will give error 
// const badDeclaration:Person = {};
const badDefinition = {} as Person;
