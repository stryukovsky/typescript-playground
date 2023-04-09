var neverObject: never

type Three = 3;

type ABC = "A" | "B" | "C";

interface Person {
    name: string;
}

interface Passport {
    serial: string;
    identifier: string;
}

type Citizen = Person & Passport;


type intersection = keyof(Person | Passport);
type junction = keyof(Person & Passport);

type A = "A";
type B = "B";

type T1 = (keyof A) | (keyof B);
type T2 = (keyof A) & (keyof B);
