// zdog-demo.js

let isSpinning = true;
// create illo
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 3,
    dragRotate: true,
    onDragStart: () => isSpinning = false,
    onDragEnd: () => isSpinning = true

  });
  
  // add a Poly
  let yTri = new Zdog.Polygon({
    addTo: illo,
    translate: { y: -60 },
    scale: 80,
    stroke: 10,
    rotate: { x: -Zdog.TAU/8 }
  });

  // add circle
  let circ = new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    stroke: 10,
    color: '#636',
    backface: '#C25'
  });
  
  // update & render
  illo.updateRenderGraph();

  let animate = () =>
  {
      if(isSpinning)
        illo.rotate.y += 0.03;

    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  };
  animate();