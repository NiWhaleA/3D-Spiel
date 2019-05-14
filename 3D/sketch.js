let planets=[];

function preload() {
    img = loadImage('earth.jpg');
  }
   
  function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    ambientLight(50);
    directionalLight(200, 200, 200, 0, 0, 400);
    for(let i =0;i<5;i++){
        for(let j=0;j<5;j++){
            for(let k=0;k<5;k++){
                erde=new Planet()
            }
        }
    }
    erde= new Planet(0,0,100,20);
    planets.push(erde);
  }
   
  function draw() {
    background(0);
    for(let planet of planets){
        planet.show();
    }
  }   
  class Planet{
  constructor(x,y,z,r){
    this.x=x;
    this.y=y;
    this.z=z;
    this.r=r;
  }
  show(){
    push();
    translate(this.x, this.y, this.z);
    rotateY(millis()/1000);
    texture(img);
    noStroke();
    sphere(this.r);
    pop();
  }
}