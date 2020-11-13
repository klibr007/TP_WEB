


// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    console.log("drawing")
    this.forms = new Array()
}

function Form(color, thickness,id){
    console.log("form")
    this.color = color
    this.thickness = thickness
    this.id= id;
}

function Rectangle(pointX, pointY, width, height, thickness, color,id){
    console.log("Rectangle")
    Form.call(this, color, thickness,id)
    this.pointX = pointX
    this.pointY = pointY
    this.width = width
    this.height = height

}
Rectangle.prototype = new Form()

function Line(firstX, firstY, secondX, secondY, thickness, color,id){
    console.log("line")
    Form.call(this, color, thickness,id)
    this.firstX = firstX
    this.firstY = firstY
    this.secondX = secondX 
    this.secondY = secondY

}
Line.prototype = new Form()

