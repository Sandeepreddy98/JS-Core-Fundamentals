const name  = {
    firstName : "Sandeep",
    lastName : "Reddy"
}

const name2 = {
    firstName : "Sudheer",
    lastName : "Reddy"
}

function printName(){
    return this.firstName + " " + this.lastName
}

console.log(printName.call(name))

function printDetails(city,state){
    return this.firstName + " " + this.lastName + " from " + city + "," +state
}

console.log(printDetails.call(name,"banglore","KA"))
console.log(printDetails.apply(name,["banglore","KA"]))
const sandeepDetails = printDetails.bind(name,"banglore","KA")
console.log(sandeepDetails())
