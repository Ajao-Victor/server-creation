          //CREATING FILE
const http = require('http');
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();
http.createServer((req ,res) => {
    fs.readFile('fs.html' , (err , data) => {
        res.writeHead(200,{'content-Type' : 'text/html'})
        res.write(data);
        //if line 10 throws errow due to encoding,it can simply be solved be 'data.toString()' method. this by default uses 'utf8'encoding system
        return res.end();
    
    })
}).listen(5000);


        // CREATING FILES
        //1.fs.appendFile()
        //2.fs.open()
        //3.fs.writeFile()
        //4.fs.unlink() [for deleting]
        //5.fs.rename()
//1
// const fs = require('fs')
//     fs.appendFile('fs.html' , 'i am AJ Stack in the flesh' , (err,data) => {
//         if (err) throw err
//        console.log('DATA');
       
// })

//2.

// const fs = require('fs');
// fs.open('fsOpen.txt' , 'w', (err,data) => {
//     if (err) throw err
//     console.log(
//         'done'
//     );
    
// })