class Point {
	x: number;
	y: number;

	draw(){
		console.log('X: ' + this.x + ", Y: " + this.y)
	}

	getDistance(another: Point){

	}
}

let point = new Point();
point.x = 2;
point.y = 3;
point.draw();