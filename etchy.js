window.etchy = (function () {
	var canvas;
	function Etchy(els){
		
		parent = els;
		canvas = document.createElement("canvas");
		parent[0].appendChild(canvas)
		canvas.height = 1000;
		canvas.width = 1000;
		var gfx = canvas.getContext("2d")
		gfx.lineWidth = 1
		var canvasInfo = {
			xStart : 100.5,
			yStart : 100.5,
			x : 100.5,
			y : 100.5,
			charWidth: 50,
			gfx : gfx
		}
		gfx.moveTo(100.5,100.5)
		//halfCircle(1,gfx)
		//drawLine(0,0,100,100,gfx)
		//drawLine(200,50,10,100,gfx)
		//drawCircle(canvasInfo,gfx)
		els = "abcd"
		drawString(els,canvasInfo)
		drawA(canvasInfo)
		
	}
	drawString = function(els,canvasInfo){
		var curChar = ""
		for (var i = 0; i < els.length; i++){
			switch (els[i]){
				case "a":
					drawA(canvasInfo)
					nextCharSpace(canvasInfo)
					break;
				case "b":
					drawB(canvasInfo)
					nextCharSpace(canvasInfo)
					break;
				case "c":
					drawC(canvasInfo)
					nextCharSpace(canvasInfo)
					break;
				case "d":
					drawD(canvasInfo)
					nextCharSpace(canvasInfo)
					break;
				default:
					break;
			}
		}
	}
	nextCharSpace = function(canvasInfo){
		canvasInfo.xStart += canvasInfo.charWidth + 20
		canvasInfo.x = canvasInfo.xStart
		canvasInfo.y = canvasInfo.yStart
		canvasInfo.gfx.moveTo(canvasInfo.x,canvasInfo.y)
	}
	drawA = function(canvasInfo){
		drawCircle(canvasInfo)
		canvasInfo.gfx.moveTo(canvasInfo.xStart + canvasInfo.charWidth,canvasInfo.yStart + canvasInfo.charWidth/2)
		canvasInfo.x = canvasInfo.xStart + canvasInfo.charWidth
		canvasInfo.y = canvasInfo.yStart + canvasInfo.charWidth/2
		quartDown(canvasInfo)
	}
	drawB = function(canvasInfo){
		drawCircle(canvasInfo)
		canvasInfo.gfx.moveTo(canvasInfo.xStart, canvasInfo.yStart - canvasInfo.charWidth / 4)
		canvasInfo.x = canvasInfo.xStart
		canvasInfo.y = canvasInfo.yStart - canvasInfo.charWidth / 4
		quartDown(canvasInfo)
		quartDown(canvasInfo)	
	}
	drawC = function(canvasInfo){
		canvasInfo.x += 3*canvasInfo.charWidth / 4;
		canvasInfo.gfx.moveTo(canvasInfo.x,canvasInfo.y)
		halfStraightBack(canvasInfo)
		diagLine(canvasInfo,-1,1)
		quartDown(canvasInfo)
		diagLine(canvasInfo,1,1)
		halfStraight(canvasInfo)
	}
	drawD = function(canvasInfo){

		drawCircle(canvasInfo)
		canvasInfo.x = canvasInfo.xStart + canvasInfo.charWidth
		canvasInfo.y = canvasInfo.yStart - canvasInfo.charWidth/2
		canvasInfo.gfx.moveTo(canvasInfo.x,canvasInfo.y)
		quartDown(canvasInfo)
		quartDown(canvasInfo)
		quartDown(canvasInfo)
	}
	Etchy.prototype.sketch = function(input){
		var charWidth = canvas/input.length;
		
	}
	drawLine = function(canvasInfo,xMove,yMove){
		//canvasInfo.gfx.moveTo(canvasInfo.x,canvasInfo.y)
		//xMove += 0.5
		//TODO add scale  into canvasInfo
		/*for (var x = 0; x < 100 * scale; x++){
		for (var y = 0; y < 100 * scale; y++){
			count++;
			setTimeout(function(){	
				
				gfx.lineTo(pos.x,pos.y)
				gfx.stroke()
				
				console.log("x: " + pos.x)
				pos.x += 1;

			},5*count,pos)
		}
	}*/
		//yMove += 0.5
		yMove = parseInt(yMove)
		canvasInfo.gfx.lineTo(canvasInfo.x + xMove+ 0.0,canvasInfo.y+yMove+ 0.0)
		canvasInfo.gfx.stroke()
		canvasInfo.gfx.moveTo(canvasInfo.x+xMove+ 0.0,canvasInfo.y+yMove + 0.0)
		canvasInfo.x +=xMove
		canvasInfo.y +=yMove	
	}
	
	drawCircle = function(canvasInfo){
		canvasInfo.x += canvasInfo.charWidth/4
		canvasInfo.gfx.moveTo(canvasInfo.x,canvasInfo.y)
		halfStraight(canvasInfo)
		diagLine(canvasInfo,1,1)
		quartDown(canvasInfo)
		diagLine(canvasInfo,-1,1)
		halfStraightBack(canvasInfo)
		diagLine(canvasInfo,-1,-1)
		quartUp(canvasInfo)
		diagLine(canvasInfo,1,-1)
		//diagLine(canvasInfo,1,-1)
		//gfx.lineTo(startX+(3*width)/4,startY)
		//gfx.lineTo(startX+width, startY + width/4)
		//gfx.lineTo(startX + width, startY+(3*width)/4)
		//gfx.stroke()	
	}
	halfStraightBack = function(canvasInfo){
		drawLine(canvasInfo,-canvasInfo.charWidth/2,0)
	}
	halfStraight = function(canvasInfo){
		drawLine(canvasInfo,canvasInfo.charWidth/2,0)
	}
	diagLine = function(canvasInfo, x,y){
		drawLine(canvasInfo,canvasInfo.charWidth/4 * x, canvasInfo.charWidth/4 * y)
	}
	
	quartDown = function(canvasInfo){
		drawLine(canvasInfo, 0, canvasInfo.charWidth /4)
	}
	quartUp = function(canvasInfo){
		drawLine(canvasInfo, 0, canvasInfo.charWidth/4 * -1)
	}
	halfCircle = function(scale, gfx){
	var pos = {
		x : 0,
		y : 0
	};
	var count = 0;
	
	for (var x = 0; x < 100 * scale; x++){
		for (var y = 0; y < 100 * scale; y++){
			count++;
			setTimeout(function(){	
				
				gfx.lineTo(pos.x,pos.y)
				gfx.stroke()
				
				
				pos.x += 1;

			},5*count,pos)
		}
	}
}
	var etchy = {
	get: function(selector){
		if (typeof selector === 'string') {
         var els = document.querySelectorAll(selector);
			return new Etchy(els);
		}
		else{
			throw new Error("invalid selector entered. Make sure to use # for ID's or . for class names")
		}
		return new Etchy(selector);
	},
	create: function(stuff){
		//return new Etchy(stuff);
	}
	};
	return etchy;
	
}());

