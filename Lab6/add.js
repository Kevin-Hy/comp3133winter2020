const fs = require('fs')
fs.mkdir('Logs', {recursive: true}, (err) =>{
    if (err) throw err;
})

process.chdir('Logs');

for (x =0; x<10;x++){
        console.log(`log${x}.txt`)
        fs.writeFile(`log${x}.txt`,`MEMES #${x}`, (err) => {
            if (err) throw err;

          });
}

