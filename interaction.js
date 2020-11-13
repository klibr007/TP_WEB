
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  console.log("dnd created")
  this.canvas = canvas
  this.interactor = interactor
  this.initialX = 0
  this.initialY = 0
  this.finalX = 0
  this.finalY = 0
  this.pression = false


  this.pressionHandler = (evt) => {
    console.log("pression handler ")
    this.pression = true
    var position = getMousePosition(this.canvas, evt)
    this.initialX = position.x
    this.initialY = position.y
    
    console.log("Coordonnées X = "+getMousePosition(this.canvas, evt).x+"\nCoordonée Y = " + getMousePosition(this.canvas, evt).x)
    interactor.onInteractionStart(this); 
  }
  
  this.moveHandler = (evt) => {
    console.log("move handler")
    if(this.pression === true){
      var position = getMousePosition(this.canvas, evt)
      this.finalX = position.x
      this.finalY = position.y
      console.log("Coordonnées X = "+getMousePosition(this.canvas, evt).x+"\nCoordonée Y = " + getMousePosition(this.canvas, evt).x)
      interactor.onInteractionUpdate(interactor,this); 
    }
  }
  
  this.dropHandler = (evt) => {
    if(this.pression === true){
      this.pression = false
      console.log("Coordonnées X = "+getMousePosition(this.canvas, evt).x+"\nCoordonée Y = " + getMousePosition(this.canvas, evt).x)
      interactor.onInteractionEnd(interactor);
    }
  }  

  // Associer les fonctions précédentes aux évènements du canvas.
  this.canvas.addEventListener('mousedown', this.pressionHandler, false);
  this.canvas.addEventListener('mousemove', this.moveHandler, false);
  this.canvas.addEventListener('mouseup', this.dropHandler, false);

};

// Developper les 3 fonctions gérant les événements
  
  






// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  console.log("get mouse")
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



