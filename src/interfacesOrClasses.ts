class ShapeClass {
}

class SquareClass extends ShapeClass {
    width: number;
    constructor(width: number) {
        super();
        this.width = width;
    }
}

class RectangleClass extends SquareClass {
    height: number;
    constructor(width: number, height: number) {
        super(width);
        this.height = height;
    }
}

function calculateArea(shape: ShapeClass): number {
    if (shape instanceof RectangleClass) {
        return shape.width * shape.height;
    } else
        if (shape instanceof SquareClass) {
            return shape.width * shape.width;
        }
        else {
            throw new Error("Unimplemented area calculation");
        }
}




interface IShape {
    kind: string;
}

interface ISquare extends IShape {
    side: number;
    kind: "square";
}

interface IRectangle extends IShape {
    width: number;
    height: number;
    kind: "rectangle";
}

function calculateAreaInterfaces(shape: IShape): number {
    if (shape.kind === "rectangle") {
        const rectangle = shape as IRectangle;
        return rectangle.height * rectangle.width;
    } else if (shape.kind === "square") {
        const square = shape as ISquare;
        return square.side * square.side;
    }
    else {
        throw new Error("Unimplemented area calculation");
    }
}

const main = () => {
    console.log(calculateArea(new RectangleClass(6, 24)));
    console.log(calculateArea(new SquareClass(12)));

    const rectangleInterface: IRectangle = {
        width: 6,
        height: 24,
        kind: "rectangle"
    };
    const squareInterface: ISquare = {
        side: 12,
        kind: "square"
    }
    console.log(calculateAreaInterfaces(rectangleInterface));
    console.log(calculateAreaInterfaces(squareInterface));

}

main();
