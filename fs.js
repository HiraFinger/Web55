

var fs = require('fs')
const path = require('path')

fs.writeFile('sinhvien.json',`[{"name":"Duc","age":27,"gender":"Male","department":"Math"},{"name":"duc","age":26,"gender":"Male","department":"Math"}]`,function(err){
    if(err) throw err
    console.log('new file OK');
    
})

fs.readFile(path.resolve(__dirname,'sinhvien.json'), 'utf8', (err, data) => {
    console.log("err:", err);
    const dataConvert = JSON.parse(data)
    console.log(dataConvert[0]);

    dataConvert.push({name: 'vuong', age: '33'})
    const contentConver = JSON.stringify(dataConvert)
    console.log(contentConver);
    fs.writeFile(path.resolve(__dirname,'sinhvien.json'), contentConver, function(err){
        if(err) throw err
        console.log('Update Ok');
    })
    
    fs.unlink(path.resolve(__dirname, 'sinhvien.json'), function(err){
        if(err) throw err
        console.log('delete OK');
    })
})
