//Create the renderer
const app = new PIXI.Application({
  width:window.innerWidth,
  height:window.innerHeight,
  antialias:true,
  resolution:1,
});

document.body.appendChild(app.view);

//Resize
app.view.style.position = "absolute";
app.view.style.display = "block";
app.autoResize = true;


//Add the canvas to the HTML document
document.body.appendChild(app.view);
app.backgroundColor = 0x050106;
//Create a container object called the `stage`
var stage = new PIXI.Container();
//Initilize the render

init();
//Definition of init
function init() {
  //Generation of all static assets
  animationSet();

}
var x = 0;
var y = 0;
function animationSet() {

  requestAnimationFrame(animationSet);


  var graphics = new PIXI.Graphics();

  // set a fill and line style
  graphics.beginFill(0xFF3300);
  graphics.lineStyle(4, 0xffd900, 1);
  x+=1;
  y+=1;
  // draw a shape
  graphics.moveTo(x,y);
  graphics.lineTo(x+250, y+50);
  graphics.lineTo(x+100, y+100);
  graphics.lineTo(x+50, y+50);
  graphics.endFill();

  app.stage.addChild(graphics);


  app.render(stage)
}






app.stage.addChild(graphics);
