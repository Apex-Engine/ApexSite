//Create the renderer
var renderer = new PIXI.CanvasRenderer({
  width:window.innerWidth,
  height:window.innerHeight,
  autoresize:true,
  antialias:true,
  resolution:1,
});

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);
