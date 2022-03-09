const os = require('os') // built in modules 

//info about current user 
const user = os.userInfo();
console.log(user);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

}

console.log(currentOS);

