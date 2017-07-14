// JavaScript Document
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();//兼容不同的浏览器

var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;//当前帧在两帧之间执行了多长时间
var deltaTime;//时间差

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;//获取鼠标的位置；

var babyTail=[];
var babyEye=[];
var babyBody=[];

var bigTail=[];
var bigEye=[];

var data;

var bigBodyOrange=[];
var bigBodyBlue=[];

var wave;//喷到食物时出现的圈；

var halo;//大鱼给小鱼喂食时的圈;

var dust;
var dustPic=[];

var bgPic=new Image()//设置背景；
document.body.onload=game;
function game(){
	   init();
	   lastTime=Date.now();
	   deltaTime=0;
	   gameloop()
	}
function init(){
	//获得canvas;
	
	can1=document.getElementById("canvas1");//鱼
	ctx1=can1.getContext("2d")
	can2=document.getElementById("canvas2");//背景等
	ctx2=can2.getContext("2d");
	
	can1.addEventListener("mousemove",onMouseMove,false);//获取鼠标的位置；
	
	bgPic.src="./src/background.jpg"
	canWidth=can1.width;
	canHeight=can1.height;
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	mom=new momObj();
	mom.init();
	baby=new babyObj();
	baby.init();
	mx=canWidth*0.5;
	my=canHeight*0.5;
	
	//babyTail的初始化
	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./src/babyTail"+i+".png";//用i来表示每张图片；
		
		}
	//eye;
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+i+".png";

		}
	//babyBody
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
		}
		
	//bigTail;
	for(var i=0;i<8;i++){
		bigTail[i]=new Image();
		bigTail[i].src="./src/bigTail"+i+".png";
		}
		
	for(var i=0;i<2;i++){
		bigEye[i]=new Image();
		bigEye[i].src="./src/bigEye"+i+".png";
		}
	  data=new dataObj();
	  
	for(var i=0; i<8;i++){
		bigBodyOrange[i]=new Image();
		bigBodyBlue[i]=new Image();
		bigBodyOrange[i].src="./src/bigSwim"+i+".png";
		bigBodyBlue[i].src="./src/bigSwimBlue"+i+".png";
		}
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	
	wave=new waveObj();
	wave.init();
	
	halo=new haloObj();
	
	for(var i=0;i<7;i++){
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust"+i+".png"		
		}
	dust=new dustObj();
	dust.init();
	}
function gameloop(){//循环；
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40)deltaTime=40;
	drawBackground();
	ane.draw();
	fruit.draw();
	fruitMonitor();
	ctx1.clearRect(0,0,canWidth,canHeight)//每次都清除一下，重对角线开始；
	mom.draw();
	baby.draw();
	momFruitscollision();
	momBabyCollision();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
	
	}
function onMouseMove(e){
	if(!data.gameOver){
	 if(e.offSetX||e.layerX){//e.layerX——相对当前坐标系的border左上角开始的坐标e.offsetX——相对当前坐标系的border左上角开始的坐标
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY
		
		}
	}
}