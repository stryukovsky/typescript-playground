interface Cylinder {
    radius: number;
    height: number;
} // type space

// const Cylinder = (radius: number, height: number) => ({radius, height}); // values space


function getVolume(figure: unknown) {
    const f = figure as Cylinder;
    if(typeof figure === 'object') {
        return f.radius * f.radius * 3.14 * f.height;
    }
}