const name = {
    firstName : "Sandeep ",
    lastName : "Reddy"
}

const name1 = {
    firstName : "Akshay ",
    lastName : "Saini"
}

function printData(city,state){
    return this.firstName + this.lastName + " from " + city +',' + state
}

console.log(printData.call(name,"Chittoor","AP"));
console.log(printData.apply(name,["Chittoor","AP"]))
const printByBinding = printData.bind(name,"Chittoor","AP")
console.log(printByBinding())