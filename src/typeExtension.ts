function simpleFunction<T extends string>(value: T) {
    console.log(value);
}

simpleFunction("x"); // 'x' extends `string`
const arg: string = "y"
simpleFunction(arg); // arg represents string type itself