//interfaces are purely for declarations
interface Point {
	x: number,
	y: number
}

let drawPoint = (point: Point) => {
	console.log(point)
}


// let drawPoint = (point: {x: number, y: number}) => {
// 	console.log(point)
// }

// drawPoint({x: 1, y: 2})

