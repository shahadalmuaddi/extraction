class Shape{
    constructor(type ="shape"){
        this.type = type;
    }
    draw(){
        console.log("draw shape");
    }
}
class Circle extends Shape{

    constructor(type){
        super(type);
    }
    draw(){
        console.log("draw circle");
    }
}
class Triangle extends Shape{

    constructor(type){
        super(type);
    }
    draw(){
        super.draw();
        console.log("draw triangle");
    }
}
let Polygon = class extends Shape{
    
}

let c = new Circle("circle");
let t = new Triangle("Triangle");

function drawShape(s){
s.draw();
}

drawShape(c);
drawShape(t);
drawShape(new Shape());
