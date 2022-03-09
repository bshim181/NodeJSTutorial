/*
File System 

Synchronous & Asynchronous  I/O Input and Output 

Synchrnous file -> thread starts and I/O operation -> enters a wait state until 
the request has been completed 

Asynchrnous I/O 
Thread starts I/O operation -> Thread processes another job while requesting for IO
Thread interrupts current job -> processes IO
*/

const {readFileSync, writeFileSync, } = require('fs');

const first = readFileSync('./content/first.txt','utf8')

console.log(first);

writeFileSync('./content/second.txt', 'Here is the result of writeFileSync')