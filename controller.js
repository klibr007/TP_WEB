
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	console.log("Pencile created")
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.ctx = ctx 
	this.drawing = drawing
	this.canvas = canvas;


	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById("butRect").onclick = () => {
		this.currEditingMode = editingMode.rect;
	}
	document.getElementById("butLine").onclick = () => {
		this.currEditingMode = editingMode.line;
	}

	document.getElementById("spinnerWidth").onchange = () => {
		this.currLineWidth = document.getElementById("spinnerWidth").value;
	}

	document.getElementById("colour").addEventListener('change', (evt) => {
		this.currColour = evt.target.value;
	},false);


	new DnD(canvas, this);


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = (dnD ) => {
		
		switch(this.currEditingMode){
			
			case editingMode.rect: {
				this.currentShape = new Rectangle(dnD.initialX, dnD.initialY, 0, 0, this.currLineWidth, this.currColour,Date.now())
				this.currentShape.paint(ctx)
				break;
			}
			case editingMode.line: {
				console.log("line")
				this.currentShape = new Line(dnD.initialX, dnD.initialY, dnD.initialX, dnD.initialY, this.currLineWidth, this.currColour,Date.now())
				this.currentShape.paint(ctx)
				break;
			}
		}
		  
	
	}

	this.onInteractionUpdate = (_this,dnD) => {

		this.drawing.paint(_this.ctx,_this.canvas);
		switch(this.currEditingMode){
			case editingMode.rect: {
				_this.currentShape.width = dnD.finalX - _this.currentShape.pointX
				_this.currentShape.height = dnD.finalY - _this.currentShape.pointY
				_this.currentShape.paint(ctx)
			  break;
			}
			case editingMode.line: {
				_this.currentShape.secondX = dnD.finalX
				_this.currentShape.secondY = dnD.finalY
				_this.currentShape.paint(ctx)
			  break;
			}
		  }
	}

	this.onInteractionEnd = (_this) => {
		_this.drawing.forms.push(_this.currentShape)
		_this.drawing.updateShapeList(_this.currentShape)
		_this.drawing.paint(_this.ctx,_this.canvas);
		


		
	}

	
};




