
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.



Form.prototype.paint = function (ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color
    ctx.lineWidth= this.thickness
};

Rectangle.prototype.paint = function (ctx) {
    console.log(this);
    Form.prototype.paint.call(this, ctx)
    ctx.beginPath();
    ctx.rect(this.pointX, this.pointY, this.width, this.height);
    ctx.stroke();
};
  
Line.prototype.paint = function (ctx) {
    
    Form.prototype.paint.call(this, ctx)
    ctx.beginPath()
    ctx.moveTo(this.firstX, this.firstY,)
    ctx.lineTo(this.secondX, this.secondY)
    ctx.stroke()
};
  
Drawing.prototype.paint = function( ctx, canvas) {
    ctx.fillStyle = 'lightgray'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    })
}

Drawing.prototype.updateShapeList = function(currentShape) {
    document.getElementById("shapeList").insertAdjacentHTML('beforeend', "<button id=\""+ currentShape.id +   "\" type=\"button\" class=\"btn btn-default\">"+
    "<span class=\"glyphicon glyphicon-remove-sign\"></span>"+
    "</button>")
    document.getElementById(currentShape.id).addEventListener('click', (evt)=> {
        console.log(currentShape.id)
        console.log(evt)
        console.log("id = " + evt.explicitOriginalTarget.id)
        var id = evt.explicitOriginalTarget.id
        console.log(id)
        document.getElementById(id).remove()
    },false )
    
        
    
}
  