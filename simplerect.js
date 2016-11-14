var rect = {
	perimeter: function(x, y){
		return 2*(x+y);
	},
	
	area: function(x, y){
		return x*y;
	}
};

function solveRect(l,b){
	console.log("Solving for rectangle with lenght "+l+" and width "+ b +".");
	if(l<0 || b<0)
	{
		console.log("Dimentions should be greater than zero lenght: "+l+" width: "+b);
	}
	else
	{
		console.log("Area of the rectangle is: "+ rect.area(l,b));
		console.log("Perimeter of the rectangle is: "+ rect.perimeter(l,b));
	}
}

solveRect(3,5);
solveRect(5,3);
solveRect(3,0);
solveRect(-3,1);