function fireBullet(){
    console.log("Firing Bullets")
}

function throttle(fn,limit){
    let flag = true
    return () => {
        let context = this,
        args = arguments
        if(flag){
            fn.apply(context,args)
            flag = false
            setTimeout(() => {
                flag = true
            }, limit);
        }
    }
}

const fireBulletByThrotelling = throttle(fireBullet,1000)