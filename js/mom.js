// JavaScript Document
var momObj=function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye=new Image();
	this.bigBody=new Image();
	this.bigTail=new Image();
	//大鱼尾巴摇动
	this.bigTailTimer=0;
	this.bigTailCount=0;
	
	this.bigEyeTimer=0;
	this.bigEyeCount=0;
	this.bigEyeInterval=1000;
	
	this.bigBodyCount=0
	}
momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	}
momObj.prototype.draw=function(){
	//lerp,x,y使得一个值趋向于目标值；
	this.x=lerpDistance(mx,this.x,0.98);//mx：目标值；this.x：现在的值；0.98：比率；
	this.y=lerpDistance(my,this.y,0.99);
	//大鱼的角度差；用delta;
	//Math.atan2(y,x)反正切
	var deltaY=-my+this.y;//目标值与现在值的差值；
	var deltaX=-mx+this.x;
	var beta=Math.atan2(deltaY,deltaX);//鼠标和大鱼之间的角度差-pI到pI之间的返回值；
	
	//不断的趋向于鼠标的角度；
	this.angle=lerpAngle(beta,this.angle,0.6);//beta：目标角度；this.angel:现在角度；0.6：速率；
	
	this.bigTailTimer+=deltaTime;
	if(this.bigTailTimer>50){
		this.bigTailCount=(this.bigTailCount+1)%8;
		this.bigTailTimer%=50;
		
		}
	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval){
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer%=this.bigEyeInterval;
		 if(this.bigEyeCount==0){
			 this.bigEyeInterval=Math.random()*1500+2000;
			 }else{
				this.bigEyeInterval=200;
			 }
	}
	ctx1.save();
	ctx1.translate(this.x,this.y);//设置原点
	ctx1.rotate(this.angle);
	//在画布上哪个先写则先画哪个
	var bigTailCount=this.bigTailCount;
	var bigEyeCount=this.bigEyeCount;
	ctx1.drawImage(bigTail[bigTailCount],-bigTail[bigTailCount].width*0.5+30,-bigTail[bigTailCount].height*0.5);
	var bigBodyCount=this.bigBodyCount;
	if(data.double==1){
		ctx1.drawImage(bigBodyOrange[bigBodyCount],-bigBodyOrange[bigBodyCount].width*0.5,-bigBodyOrange[bigBodyCount].height*0.5);
		}else{	
		ctx1.drawImage(bigBodyBlue[bigBodyCount],-bigBodyBlue[bigBodyCount].width*0.5,-bigBodyBlue[bigBodyCount].height*0.5);	
			}//判断颜色；
	
	ctx1.drawImage(bigEye[bigEyeCount],-bigEye[bigEyeCount].width*0.5,-bigEye[bigEyeCount].height*0.5);
	ctx1.restore();
	}
