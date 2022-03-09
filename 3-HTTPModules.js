// HTTP Module -> Allows WEB Server Set up 

const http = require('http');
const server = http.createServer((req, res) => {
    //callback functions
    if(req.url == '/') {
        res.end('welcome to homepage');
    }
    if(req.url == '/about') {
        res.end('here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant find the page you are looking for</p>
        <a href="/">back home<a> 
    `)
    
})

server.listen(5000)



/*

Reason for package.json
It creates an information about the version of the code
the dependency package used to generate this module. (List of dependencies)

npm also creates a folder for installed dependencies  
npm automatically generates folders for the required dependencies of our installed dependencies 
ex. bootstrap requires Jquery -> Jquery folder is automatically generated. 

Must have good awareness of the useful dependencies for your work. 

File
.gitignore -> allows to select for files that are ignored by git push commands 
*/


