// JavaScript Document
var aneObj=function(){
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.amp=[];//振幅
	this.alpha=0;
	}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*17+Math.random()*20;//每隔一段距离长一根海葵随机的；
		this.headx[i]=this.rootx[i];//每隔一段距离长一根海葵随机
		this.heady[i]=canHeight-200-Math.random()*50;
		this.amp[i]=Math.random()*50+50;
		}
	}
aneObj.prototype.draw=function(){
	this.alpha+=deltaTime*0.0006;
	var l=Math.sin(this.alpha);
	ctx2.save();
	   ctx2.globalAlpha=0.6;
	 //要写在stroke之前；

	for(var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+l*this.amp[i]
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		ctx2.lineWidth=20;
	    ctx2.lineCap="round";
	    ctx2.strokeStyle="#3b154e"
		ctx2.stroke();
		
		}
	ctx2.restore();
	}