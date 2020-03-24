const delayedPromise = (num) =>{
    return new Promise((resolve, reject) =>{
        if (typeof num === "number"){
            setTimeout(resolve, 500, num*num)
        }
        else{
            reject("That is not a number!")
        }
    })
}

delayedPromise(5)
    .then(result => console.log(result))

async function asyncPromise(num) {
    return await delayedPromise(num)
}

asyncPromise(6)
    .then(result => console.log(result))






