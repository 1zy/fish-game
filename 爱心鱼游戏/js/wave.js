// JavaScript Document
var waveObj=function(){
	this.x=[];//圈出现的坐标
	this.y=[];
	this.alive=[];//判断是不是被捕捉到
	this.r=[];//圈的半径
}
waveObj.prototype.num=10;//圈的数量为10个
waveObj.prototype.init=function(){
	 for(var i=0;i<this.num;i++){
		  this.r[i]=0;//初始时的半径为0；
		 this.x[i]=0;
		 this.y[i]=0;
		 this.alive[i]=false;//初始时定义都是没有被捕获
		
		 }
	
	}
waveObj.prototype.draw=function(){
	ctx1.save();
	  ctx1.lineWidth=2;
	  ctx1.shadowBlur=10;
		 ctx1.shadowColor="white";
	   for(var i=0;i<this.num;i++){
		     if(this.alive[i]){//如果被捕获
				 this.r[i]+=deltaTime*0.04;//半径随时间的增加而增大；
				 if(this.r[i]>100){//当半径>100
					 this.alive[i]=false;//即半径停止增大
					 break;//跳出本次循环 
				 }
				 var alpha=1-this.r[i]/50;
				 //设置圈的透明度随时间 的增而减小的
				 ctx1.beginPath();
				 ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);//所画圈的圆心坐标，半径，弧度（0,2π）；
				 ctx1.closePath();
				 ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
				 ctx1.stroke();
				 }
		   
		   }
	  ctx1.restore();
	}
waveObj.prototype.born=function(x,y){
	   for(var i=0;i<this.num;i++){
		     if(!this.alive[i]){//碰撞到的时候如果this.alive[i]不为true则让其为true
				 //born
				 this.alive[i]=true;
				 this.r[i]=10;
				 this.x[i]=x;
				 this.y[i]=y;
				 return//跳出循环
				 }
		   }
	
	}