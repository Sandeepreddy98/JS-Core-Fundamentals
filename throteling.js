function logData(){
    console.log("log data")
}

function debounce(fn,delay){
    let timer;
    return () => {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context,args)
        },delay)
    }
}


function trottle(fn,delay){
    let flag = true
    return () => {
        if(flag){
            fn.apply(this,arguments)
            flag = false
            setTimeout(() => {
                flag = true
            },delay)
        }
    }
}