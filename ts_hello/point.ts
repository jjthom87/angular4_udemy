export class Point {
	// private x: number;
	// private y: number;

	constructor(private _x?: number, private _y?: number){
		// this not needed
		// this.x = x;
		// this.y = y;
	}

	draw(){
		console.log('X: ' + this._x + ", Y: " + this._y)
	}

	getDistance(another: Point){

	}

	get x(){
		return this._x;
	}

	set x(value){
		if(value < 0)
			throw new Error("Value Can not be less than 0")
		this._x = value;
	}

}