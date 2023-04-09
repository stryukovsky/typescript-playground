interface Vector2D {
    x: number;
    y: number;
}

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

interface NamedVector2D {
    y: number;
    x: number;
    name: string;
}

function vectorLength(vector: Vector2D): number {
    return Math.sqrt(vector.x *vector.x + vector.y * vector.y);
}

function normalize(vector: Vector3D): Vector3D {
    const length = vectorLength(vector);
    return {
        x: vector.x / length,
        y: vector.y / length,
        z: vector.z / length,
    }
}

const exampleVectors = () => {
    const v1: Vector2D = {
        x: 12,
        y: 5,
    };
    const v2: NamedVector2D = {
        x: 3,
        y: 4,
        name: "Vector 2",
    }
    console.log(vectorLength(v1));
    console.log(vectorLength(v2));

    console.log(normalize({x: 3, y: 4, z: 6}));
};

exampleVectors();
