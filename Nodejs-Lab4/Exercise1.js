const path =require('path')
const fs = require('fs')
const folder = process.cwd()
const ext = process.argv[2]
console.log(`Current Working Directory: ${folder}`)
console.log(`Command arg extension: ${ext}`)
/*argv[#]
ex. node bob.js js
     0     1     2
*/
fs.readdir(folder, (err, files) =>{
    files.forEach(file =>{
        if (file.includes(ext))
            console.log(file)
    })
})
/* The Denton way
fs.readdir(folder, (err, files) =>{
    if (err) throw err
    files.filter(f => path.extname(f) == ext)
        .forEach(f=> console.log(f))
})
*/
