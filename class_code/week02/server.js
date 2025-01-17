const http = require("http")
const app = http.createServer((req,res)=>{
    if(req.url === "/") {
        res.end("hello from home")
    }
    else if(req.url; === "/details")
        res.end("hello from details")
})
app.listen(8000)