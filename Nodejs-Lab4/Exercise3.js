setInterval(() => null, 10000)

process.on('exit', () =>{
    console.log(`process uptime on exit: ${process.uptime()}`)
})
process.on('SIGINT', () => {
    console.log(`process uptime on signal interrupt: ${process.uptime()}`) 
    process.emit('exit')
})