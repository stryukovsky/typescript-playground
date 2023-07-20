
function concatObjects<T extends object, U extends object>(a: T, b: U | null): T & Partial<U> {
    return {...a, ...b};
}

const objectConcatenation = concatObjects({name: "Name"}, null);
