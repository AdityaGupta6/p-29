
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var polygon;
var ground1,ground2,ground3;
var line1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;


function setup(){

	createCanvas(1300, 600);
    engine = Engine.create();
    world = engine.world;
    

    
    ground1=new Ground(650,550,1300,20)
    ground2=new Ground(600,300,300,20)
    ground3=new Ground(1000,200,200,20)
    polygon=new Polygon(150,200,20)

 box1=new Box(580,295,30,55)
 box2=new Box(550,295,30,55)
 box3=new Box(640,295,30,55)
 box4=new Box(670,295,30,55)
 box5=new Box(510,295,30,55)
 box6=new Box(490,295,30,55)
 box7=new Box(630,295,30,55)


 box9=new Box(580,200,30,55)
 box10=new Box(550,200,30,55)
  box11=new Box(510,200,30,55)
 box12=new Box(600,200,30,55)
 box13=new Box(630,200,30,55)

 box14=new Box(525,150,30,55)
 box15=new Box(565,150,30,55)
 box16=new Box(590,150,30,55)
box17=new Box(610,150,30,55)

 box18=new Box(555,100,30,55)
 box19=new Box(595,100,30,55)


box20=new Box(1000,150,30,55)
box21=new Box(960,150,30,55)
box22=new Box(920,150,30,55)
box23=new Box(1040,150,30,55)
box24=new Box(1080,150,30,55)
box25=new Box(1030,150,30,55)

box26=new Box(1040,120,30,55)
box27=new Box(1000,120,30,55)
box28=new Box(960,120,30,55)
box29=new Box(920,120,30,55)

box30=new Box(960,80,30,55)
box31=new Box(1020,80,30,55)
box32=new Box(1010,80,30,55)






 





    line1=new Line(polygon.body,{x:150,y:200})



    keyPressed()

	Engine.run(engine);
}



function draw() {

    background(230);

    textSize(30)
	text ('Drag the haxagonal stone and release it,launch it toward the block',40,50)
ground1.display();
ground2.display();
ground3.display();
polygon.display();
line1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
// box8.display()
box9.display()
box10.display()
box11.display()
box12.display() 
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()
box26.display()
box27.display()
box28.display()
box29.display()
box30.display()
box31.display()
box32.display()



}


function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
	  line1.fly()
	
}
function keyPressed(){

	if(keyCode===32){
		Matter.Body.setPosition(polygon.body,{x:100,y:100})
		line1.attach(polygon.body)

	}
}














