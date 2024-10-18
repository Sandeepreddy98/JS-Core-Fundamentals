/*
Currying is a functional programming technique that involves transforming
a function with multiple arguments into a sequence of functions, each with a single argument.
In JavaScript, currying allows you to take a function that takes multiple arguments and 
turn it into a chain of functions that each take one argument at a time.
*/

/*
Curring can be implemented in two ways
   1.Using bind method.
   2.Using Closure
*/

const multiply = (x,y) => {
    return x*y
}

const multiplyByTwo = multiply.bind(this,2)
console.log(multiplyByTwo(5))

const multiplyByThree = multiply.bind(this,3)
console.log(multiplyByThree(5))

//Using Closure
const multiplyUsingClosure = (x) => {
    return (y)=>{
        return x*y
    }
}

const multiplyByTwoUsingClosure = multiplyUsingClosure(2)
console.log(multiplyByTwo(5))

console.log(sum(1)(2)(3))

