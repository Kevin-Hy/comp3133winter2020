const fs = require('fs')

for (x = 0; x < 10; x++) {
    fs.unlink(`\Logs/log${x}.txt`, (err) => {
        if (err) throw err;
        else {
            console.log(`delete files...log${x}.txt`);
        }
    });
}
fs.rmdir('Logs', function (err) {
    if (err) {
     reject(err);
    } else {
     resolve();
    }
   });

