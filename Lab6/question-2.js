const delayedPromise = (num) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 500, num*num)
    })
}

const delayedPromise2 = (num) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 500, num*num)
    })
}

Promise.all([delayedPromise(6),delayedPromise2(7)])
    .then(result => console.log(result))