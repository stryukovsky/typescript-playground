interface Vector3D {
    x: number;
    y: number;
    z: number;
}

let axis1 = 'x';
const axis2 = 'x';

function getComponent(vector: Vector3D, component: 'x'|'y'|'z'):number {
    return vector[component];
}

const vector: Vector3D = {
    x: 3,
    y: 4,
    z: 5
}

// getComponent(vector, axis1);
getComponent(vector, axis2);