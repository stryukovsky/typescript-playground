

type BinaryFn = (a: number, b: number) => number;

type ArrayFn = <T>(array: Array<T>, value: T) => number;

const functionTypes = () => {
    const add: BinaryFn = (a, b) => a + b;
    const sub: BinaryFn = (a, b) => add(a, -b);
    const mul: BinaryFn = (a, b) => a * b;

    const find: ArrayFn = (array, value) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element == value) {
                return index;
            }
        }
        return -1;
    }

    console.log(find([1, 2, 3, 4], 1));
}
