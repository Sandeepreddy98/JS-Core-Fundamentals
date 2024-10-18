// Debouncing is a strategy used for delaying the execution of function calls 
function getData(){
    // API requests and fetch data
    console.log('Logged')
}

function debounce(fn,delay){
    let timer
    return ()=> {
        let context = this,
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, delay);
    }
}

const fetchDataUsingDebounce = debounce(getData,400)