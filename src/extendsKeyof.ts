interface Point {
    x: number;
    y: number;
}

type PointKeys = keyof Point;

function findBy<T, K extends keyof T, V>(values: Array<T>, key: K, value: V): T | null {
    for (const item of values) {
        if (item[key] == value) {
            return item;
        }
    }
    return null;
}

const findPointsByCriteria = () => {
    const points: Array<Point> = [
        {
            x: 10,
            y: 20,
        },
        {
            x: 20,
            y: 80,
        },
        {
            x: 30,
            y: 111,
        }
    ];
    console.log(findBy(points, 'x', 30));
};

findPointsByCriteria();
