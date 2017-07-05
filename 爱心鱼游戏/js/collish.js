// JavaScript Document
//判断大鱼和果实的距离；
function momFruitscollision(){
 if(!data.gameOver){
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			//判断距离；利用坐标差
			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y)
			if(l<900){
				//果实被吃掉；
				fruit.dead(i);
				data.fruitNum++;//碰到果实之后data加倍；
				mom.bigBodyCount++;
				if(mom.bigBodyCount>7){
					mom.bigBodyCount=7;
					}
				if(fruit.fruitType[i]=="blue"){
					data.double=2;
					}else{
						data.double=1;
						}
				wave.born(fruit.x[i],fruit.y[i]);
				}
		}
	 }
   }
}//mom和baby碰撞；
function momBabyCollision(){
	if(data.fruitNum>0&&!data.gameOver){
	var l=calLength2(mom.x,mom.y,baby.x,baby.y);
	if(l<900){
		baby.babyBodyCount=0;//data归0；
		mom.bigBodyCount=0;
		//分数的更新
		data.addScore();
		halo.born(baby.x,baby.y);
		}
	}
}
