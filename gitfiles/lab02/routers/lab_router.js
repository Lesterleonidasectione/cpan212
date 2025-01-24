import express from "express";
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Welcome to the lab router")
})

router.get("/name", (req,res)=>{
    res.send("Lester")
})

router.get("/greeting", (req,res)=>{
    res.send("Hello, Lester - N00022119")
})

router.get("/add/:x/:y", (req,res)=>{
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);

    res.send(`${x+y}`)
})

router.get("/calculate/:a/:b/:operation", (req,res)=>{
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    switch (req.params.operation) {
        case "+":
            res.send(`${a+b}`);
            
        break;
        
        case "-":
            res.send(`${a-b}`);
                
        break;
                
        case "*":
            res.send(`${a*b}`);               
        break;
            
        case "/":
            res.send(`${a/b}`);
        break;
    
        default:
            res.send("WRONG OPERATION")
    }
})

export default router;
