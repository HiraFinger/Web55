const lodash = require('lodash')
console.log(lodash.add(1,2));

var fs = require('fs')
const path = require('path')


fs.writeFile('hello.txt', 'Hello World 1', function (err){
    if(err) return console.log(err);
    console.log(('OK hello.txt'));
})
// read
fs.readFile(path.resolve(__dirname, 'hello.txt'), 'utf8', (err, data) => {
    console.log('err:',err);
    console.log("data:",data);
})
// update
fs.appendFile('hello.txt', '\nContent!', function(err){
    if(err) return console.log(err);
    console.log("Update OK ");
})
//rename
fs.rename('hello.txt', 'NewHello.txt', function(err){
    if(err) throw err
    console.log('rename OK');
})
//delete
fs.unlink('NewHello.txt', function(err){
    if(err) throw err
    console.log('delete OK');
})
console.log(__dirname);