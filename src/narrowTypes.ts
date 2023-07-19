
function getItem(index: number): number | null {
    if (index > 10) {
        return null;
    }
    return index * 2 % 3;
}

let elementMayBeNull = getItem(100);
if (elementMayBeNull) {
    elementMayBeNull; // here element is number
}
