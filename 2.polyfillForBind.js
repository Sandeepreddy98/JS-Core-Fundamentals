let name  = {
    firstName : "Sandeep",
    lastName : "Reddy"
}

function userData(city,state){
    return `${this.firstName} ${this.lastName} from ${city}, ${state}`
}

//call

console.log(userData.call(name,"Chittoor","AP"))

//apply

console.log(userData.apply(name,["Chittoor","AP"]))

// Bind
const printUser1 = userData.bind(name,"Chittoor","AP")
console.log(printUser1());

//polyfill for bind

Function.prototype.myBind = function(...args){
    const global = this
    const params = args.slice(1)
    return function(...args2){
        return global.apply(args[0],[...params,...args2])
    }
}


const printUserMyBind = userData.myBind(name,"Chittoor","AP")
console.log(printUserMyBind("sandy"));
