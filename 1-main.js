const names = require('./1-name'); //own moduels always start with dot = current directory
const util = require('./1-util');
util.sayHi(names.john);
util.sayHi(names.peter);
require('./1-util'); // this will perform the function wrapped around this method. 