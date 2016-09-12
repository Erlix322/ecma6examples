class Human {
	constructor(name){
		this.name=name
	}
}
//let us build some Humans
let eve = new Human("Eve");
console.log("output: "+JSON.stringify(eve));
//output: {name:"eve"}
//pretty boring, huh?
//lets add some Methods to her the ecma6 way
Object.assign(eve,{eating:()=>{console.log("eating apples")}})
eve.eating();
//output: eating apples
//we just assigned a new functionality to our human
//Now we can play god by building objects with different behaviour
let jesus = {name:"Jesus"}
var waterwalking = (name) =>{
	console.log(name+" is walking over the water.")
}

var doMagic = (magicalFunction) => {
	magicalFunction();
}

var castWaterToWine = () =>{
	console.log("This water should henceforth be wine!")
}

//Compose Jesus
Object.assign(jesus,{doMagic:doMagic})
console.log(jesus) //{ name: 'Jesus', doMagic: [Function: doMagic] }
jesus.doMagic(castWaterToWine)
//output
//"This water should henceforth be wine!"
