let message: any;
message = 'abc';
console.log(message.endsWith('b'));
let endsWithC = (<any>message).endsWith('c');
console.log(endsWithC)
let alternativeWay = (message as any).endsWith('c');