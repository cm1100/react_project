var fs = require('fs')

console.log(fs)


fs.readFile('demo.txt','utf-8',(err,data)=>{
    console.log(data)

})


