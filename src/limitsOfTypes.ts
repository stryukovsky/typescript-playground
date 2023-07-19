interface Room {
    numDoors: number;
    height: number;
};

// This code is error because elephant is outside of Room's type limits
// const room: Room = {
//     numDoors: 1,
//     height: 210,
//     elephant: 4
// };

const obj = {
    numDoors: 10,
    height: 10000,
    dummy: "yes"
};

const room2: Room = obj;



interface Person {
    id: string;
    name: string;
    surname: string;
}

function logPerson(person: Person) {
    const {id, name, surname} = person;
    console.log(`${id}: ${name} ${surname}`);
}

function functionWithDefault(x: string, y = 10) {

}

