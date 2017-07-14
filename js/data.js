// JavaScript Document
var dataObj=function(){
	this.fruitNum=0;
	this.double=1;//翻倍
	this.score=0;
	this.gameOver=false;
	this.alpha=0;//透明度
	}
dataObj.prototype.draw=function(){
	ctx1.shadowBlur=5;//添加阴影；
	ctx1.shadowColor="white"
	ctx1.fillStyle="white";
	ctx1.fillText("Score :" +this.score,canWidth*0.5,canHeight-20);//可将要绘制的文字用引号引出放在前面（要绘制的，位置）
	if(this.gameOver){
	    this.alpha+=deltaTime*0.005;
		if(this.alpha>1){
			this.alpha=1;
			ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		    ctx1.fillText("GAME OVER",can1.width*0.5,can1.height*0.5);
		}
		}
	}
dataObj.prototype.addScore=function(){
	
	this.score+=this.fruitNum*1*this.double;
	this.fruitNum=0;
	this.double=1;
	}