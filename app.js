//settings
var h = 1000,
    w = 1200,
    posX = w/2,
    posY = h,
    lastPosX = false,
    lastPosY = false,
    lastHeight = false,
    lastWidth = false;

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: w,
      height: h,
      wireframes: false
    }
});

var ground = Bodies.rectangle(w/2, h, w, 10, { isStatic: true });
var sideL = Bodies.rectangle(0, h/2, 10, h, { isStatic: true });
var sideR = Bodies.rectangle(w, h/2, 10, h, { isStatic: true });
World.add(engine.world, [ground, sideL, sideR]);


createShape('square', 'navy', 'left', 'extra-large')
createShape('square', 'blue', 'left', 'large')
createShape('extra-wide-rectangle', 'purple', 'right', 'large')
createShape('square', 'red', 'left', 'medium')
createShape('extra-wide-rectangle', 'orange', 'center', 'large')
createShape('triangle', 'black', 'left', 'small')
createShape('square', 'gray', 'right', 'medium')

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);


///////////////////////////

// box - functions
function createShape(shape, color, pos, size){

  // set sizes
  switch (size) {
    case 'small':
      size = 80;
      break;
    case 'medium':
      size = 120;
      break;
    case 'large':
      size = 160;
      break;
    case 'extra-large':
      size = 200;
      break;
    default:
      console.log("error! size:" + size + "isn't valid.");
  }

  // set colors
  switch (color) {
    case 'navy':
      color = '#001F3F';
      break;
    case 'blue':
      color = '#0074D9';
      break;
    case 'aqua':
      color = '#7FDBFF';
      break;
    case 'teal':
      color = '#39CCCC';
      break;
    case 'olive':
      color = '#3D9970';
      break;
    case 'green':
      color = '#2ECC40';
      break;
    case 'lime':
      color = '#01FF70';
      break;
    case 'yellow':
      color = '#FFDC00';
      break;
    case 'orange':
      color = '#FF851B';
      break;
    case 'red':
      color = '#FF4136';
      break;
    case 'fushia':
      color = '#F012BE';
      break;
    case 'purple':
      color = '#B10DC9';
      break;
    case 'maroon':
      color = '#85144B';
      break;
    case 'white':
      color = '#FFFFFF';
      break;
    case 'silver':
      color = '#DDDDDD';
      break;
    case 'gray':
      color = '#AAAAAA';
      break;
    case 'black':
      color = '#111111';
      break;
    default:
      console.log("error! color:" + color + "isn't valid.");
  }


  // set position
  // check if first
  if (lastHeight) {
    posY = posY - lastHeight;
  } else {
    posY = posY - size;
  }

  if (lastWidth) {
    // if not first, set X based on position
    switch (pos) {
      case 'left':
        posX = posX - (size/2);
        break;
      case 'center':
        posX = posX;
        break;
      case 'right':
        posX = posX + (size/2);
        break;
      default:
        console.log("error! position:" + pos + "isn't valid.");
    }
  }


  if ( shape == 'square' ) {
    // square
    width = size;
    height = size;
    lastWidth = width;
    lastHeight = height;
    var temp = Bodies.rectangle(posX, posY, width, height, {
                 render: {
                   fillStyle: color,
                   strokeStyle: 'white',
                   lineWidth: 0
                 }
    });
    World.add(engine.world, temp);
    //
  } else if ( shape == 'wide-rectangle' ) {
    // wide rect
    width = size*1.5;
    height = size*.75;
    lastWidth = width;
    lastHeight = height;
    var temp = Bodies.rectangle(posX, posY, width, height, {
                 render: {
                   fillStyle: color,
                   strokeStyle: 'white',
                   lineWidth: 0
                 }
    });
    World.add(engine.world, temp);
    //
  } else if ( shape == 'tall-rectangle' ) {
    // tall rect
    width = size*.75;
    height = size*1.5;
    lastWidth = width;
    lastHeight = height;
    var temp = Bodies.rectangle(posX, posY, width, height, {
                 render: {
                   fillStyle: color,
                   strokeStyle: 'white',
                   lineWidth: 0
                 }
    });
    World.add(engine.world, temp);
    //
  } else if ( shape == 'extra-wide-rectangle' ) {
    // extra wide rect
    width = size*2.5;
    height = size*.5;
    lastWidth = width;
    lastHeight = height;
    var temp = Bodies.rectangle( posX, posY, width, height, {
                 render: {
                   fillStyle: color,
                   strokeStyle: 'white',
                   lineWidth: 0
                 }
    });
    World.add(engine.world, temp);
    //
  } else if ( shape == 'extra-tall-rectangle' ) {
    // extra tall rect
    width = size*.5;
    height = size*2.5;
    lastWidth = width;
    lastHeight = height;
    var temp = Bodies.rectangle( posX, posY, width, height, {
                 render: {
                   fillStyle: color,
                   strokeStyle: 'white',
                   lineWidth: 0
                 }
    });
    World.add(engine.world, temp);
    //
  } else if ( shape == 'triangle' ) {
    // triangle
    width = size*.75;
    height = size*.75;
    lastWidth = width;
    lastHeight = height;
    var temp = Bodies.polygon( posX, posY, 3, size*.75, {
                 render: {
                   fillStyle: color,
                   strokeStyle: 'white',
                   lineWidth: 0
                 }
    });
    World.add(engine.world, temp);
    //
  } else if ( shape == 'pentagon' ){
    // pentagon
    width = size*.75;
    height = size*.75;
    lastWidth = width;
    lastHeight = height;
    var temp = Bodies.polygon( posX, posY, 5, size*.75, {
                 render: {
                   fillStyle: color,
                   strokeStyle: 'white',
                   lineWidth: 0
                 }
    });
    World.add(engine.world, temp);
    //
  } else {
    console.log("error! shape:" + shape + "isn't valid.")
  }

}
