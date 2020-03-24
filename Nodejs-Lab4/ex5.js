const pr = require('process');

pr.stdout.write("Input: ")
process.stdin.on("data", (input) =>{
    let output = input.toString().toUpperCase()
    pr.stdout.write("Output:" + output)
    pr.stdout.write("Input: " + input)
})