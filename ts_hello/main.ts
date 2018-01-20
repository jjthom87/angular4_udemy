function log(message){
	console.log(message)
}

log("Hello")

let count = 2;

const loopThis = () => {
	for(let i = 0; i < 5; i++){
		console.log(i)
	}
	//console.log(i)
}

loopThis();

let counter = 5;
//counter = 'a';

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a']

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

enum Color { Red , Green, Blue, Purple };
console.log(Color)
let backgroundColor = Color.Green;

a = 1;
// a = true;
// a = 'a'