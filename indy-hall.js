let colors = [
    "#ffffff",
    "#ececec",
    "#404040",
    "#cfa926",
    "#fccd0c",
    "#1c1c1c"
];

let height = 40;
let width = 20;
let depth = 10;

let speed = 0.03;
let isSpinning = true;

let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 2,
    dragRotate: true,
    onDragStart: () => isSpinning = false,
    onDragEnd: () => isSpinning = true
  });

let group = new Zdog.Group({
    addTo: illo
});

let outline_1 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 200,
    rotate:{z:10},
    stroke: 20,
    color: colors[2]
  });

let outline_2 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 250,
    stroke: 5,
    color: colors[0]
  });

let i = new Zdog.Shape({
    addTo: group,
    path: [
        { y: -height,z:-depth*0.5 },
        { y:  height,z:depth*0.5 }
    ],
    translate: {x:-width*1.25},
    stroke: 20,
    color: colors[0]
});

let h = new Zdog.Shape({
    addTo: group,
    path: [
        { x: -width, y: -height,z:depth },
        { x: -width, y: height },
        { move: { x: width, y: height } },
        { x: width, y: -height,z:-depth },
        { x: width, y: height },
        { move: { x: width, y: 0.0,z:-depth*0.5 } },        
        { x: width, y: 0.0,z:-depth*0.5 },
        { x: -width, y: 0.0,z:depth*0.5 }
    ],
    closed: false,
    translate: {x:width*1.25},
    stroke: 20,
    color: colors[0]
});

illo.updateRenderGraph();

let animate = () =>
{
    if(isSpinning)
    {
        outline_1.rotate.y += speed;
        outline_2.rotate.y += speed*0.5;
        group.rotate.y += speed;
        i.rotate.y += speed*0.5;
        h.rotate.y += speed*0.5;
    }
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
};
animate();