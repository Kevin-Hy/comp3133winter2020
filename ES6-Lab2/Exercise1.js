//Exercise 1

const compareNumberToTen = (number) =>{
    promise1 = new Promise((resolve, reject) =>{

        if (number>numCompare){
            resolve(number +" is greater than 10, success!")
        }
        else if (number<numCompare){
            reject(number +" is less than 10, error!")
        }
    })
}

compareNumberToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareNumberToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))
