
function add(a: number, b: number | null) {
    if (b) {
        return a + b;
    } else {
        throw new Error("Second argument not provided");
    }
}

add(5, null);
