// const name = {
//     firstName : "Sandeep",
//     lastName : " reddy"
// }

// function printData(city,state){
//     return this.firstName + this.lastName + " from " + city + "," + state
// }

// Function.prototype.mybind = function(...args){
//     const obj = this
//     const params = args.slice(1)
//     return function(...args2){
//         return obj.apply(args[0],[...params,...args2])
//     }
// }

// const printByMyBind = printData.mybind(name,"Chittoor","AP")
// console.log(printByMyBind());

const a = function(){
    console.log("a",this === global);    
	const b = {
	func1: function(){
	console.log("b",this === global);
	}};   
	const c = {
	func2: ()=>{        
	console.log("c",this === global);      
	}    
	};    
	b.func1();    
	c.func2();  
	}
a();