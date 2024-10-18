//Event Bubbling
// const grandParent = document.getElementById('grandparent')
// if(grandParent){
//     grandParent.addEventListener('click',() => {
//         console.log("Grand parent Clicked!")
//     },false)
// }
// const parent = document.getElementById('parent')
// if(parent){
//     parent.addEventListener('click',() => {
//         console.log("Parent Clicked!");
//     },false)
// }

// const child = document.getElementById('child')
// if(child){
//     child.addEventListener('click',() => {
//         console.log("Child Clicked!")
//     },false)
// }

//Event Capturing or trickling
const grandParent = document.getElementById('grandparent')
if(grandParent){
    grandParent.addEventListener('click',() => {
        console.log("Grand parent Clicked!")
    },true)
}
const parent = document.getElementById('parent')
if(parent){
    parent.addEventListener('click',() => {
        console.log("Parent Clicked!");
    },true)
}

const child = document.getElementById('child')
if(child){
    child.addEventListener('click',() => {
        console.log("Child Clicked!")
    },true)
}

