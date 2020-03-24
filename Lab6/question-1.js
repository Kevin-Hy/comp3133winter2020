
const mixedArray = ['Matrix',1,true,2,false,3]
const multiplyNumbers = (array) =>{
    //Array and counter to store valid answers
    array2 = []
    x =0
    return new Promise((resolve, reject) =>{
        let makeCaps = array.map (number =>{
            if (typeof number === 'number'){
                array2[x] = number *5
                x++
            }
        })
        resolve(array2)
    })
}

multiplyNumbers(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))