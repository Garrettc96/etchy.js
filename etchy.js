window.etchy = (function () {
	var canvas;
	function Etchy(els){
		console.log(els)
		parent = els;
		canvas = document.createElement("canvas");
		parent[0].appendChild(canvas)
		canvas.height = 1000;
		canvas.width = 1000;
		var gfx = canvas.getContext("2d")
		var canvasInfo = {
			x : 0,
			y : 0,
			charWidth: 50
		}
		gfx.moveTo(0,0)
		//halfCircle(1,gfx)
		//drawLine(0,0,100,100,gfx)
		//drawLine(200,50,10,100,gfx)
		drawCircle(50,50,50,gfx,canvasInfo)
		
	}
	Etchy.prototype.sketch = function(input){
		var charWidth = canvas/input.length;
		
	}
	drawLine = function(canvasInfo,xMove,yMove){
		gfx.moveTo(canvasInfo.x,canvasInfo.y)
		gfx.lineTo(canvasInfo.x + xMove,canvasInfo.y+yMove)
		gfx.stroke()
		gfx.moveTo(canvasInfo.x+xMove,canvasInfo.y+yMove)
		canvasInfo.x = canvasInfo.x+xMove
		canvasInfo.y = canvasInfo.y+yMove
	}
	drawCircle = function(canvasInfo,gfx){
		
		//gfx.moveTo(startX+width/4,startY)
		halfStraight(canvasInfo)
		gfx.lineTo(startX+(3*width)/4,startY)
		gfx.lineTo(startX+width, startY + width/4)
		gfx.lineTo(startX + width, startY+(3*width)/4)
		gfx.stroke()	

	}
	halfStraight = function(canvasInfo){
		drawLine(canvasInfo,canvasInfo.width/2,0)
	}
	diagForward = function(canvasInfo){
		drawLine(canvasInfo,canvasInfo.width/4, canvasInfo.width /4)
		
	}
	diagBack = function (canvasInfo){
		drawLine(canvasInfo,-canvasInfo.width/4, canvasInfo.width /4)
	}
	quartDown = function(canvasInfo){
		drawLine(canvasInfo, 0, canvasInfo.width /4)
	}
	halfCircle = function(scale, gfx){
	var pos = {
		x : 0,
		y : 0
	};
	var count = 0;
	console.log("x: " + pos.x)
	for (var x = 0; x < 100 * scale; x++){
		for (var y = 0; y < 100 * scale; y++){
			count++;
			setTimeout(function(){	
				
				gfx.lineTo(pos.x,pos.y)
				gfx.stroke()
				
				console.log("x: " + pos.x)
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
		console.log("stuff?")
		//return new Etchy(stuff);
	}
	};
	return etchy;
	
}());

