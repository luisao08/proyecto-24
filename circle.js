class Circle{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		var options ={
			restitution:0.3,
			friction:5,
			density:1
		}
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var circlepos=this.body.position;		
			push();
			translate(circlepos.x, circlepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r, this.r);
			pop();
	}

}