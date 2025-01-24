const http = require("http");
const fs = require("fs");


const app = http.createServer((req, res)=>{
    if(req.url === "/") {
        res.end(`Welcome to the server`)
}
else if(req.url === "/about"){
    const webpage = fs.readFileSync("about.html");
    res.end(webpage);
}
else if(req.url === "/login"){
    const webpage = fs.readFileSync("login.html");
    res.end(webpage);
}

else {
    console.log(`Page not Found`);
}
})

let PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})
    