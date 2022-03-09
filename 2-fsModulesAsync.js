//asynchronous version

const {readFile, writeFile} = require('fs');

//without the utf8 command,  we get the buffer value
readFile('./content/first.txt', 'utf8', (err,result)=> {
    //sets up functionality of callback function 
    if (err){
        return 
    }
    console.log(result);
    const first = result; 
    readFile('./content/second.txt', 'utf8', (err, result)=> {
    if (err) {
        console.log(error);
        return
    }
    const second = result 
    writeFile('./content/second.txt', 'Here is the result of writeFileAsync',
    {flag: a}, (err, result)=> {
        if(err) {
            return 
        }
        console.log(result);
    }) 
    })
})