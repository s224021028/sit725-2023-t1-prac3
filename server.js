var express = require("express")
var app = express()
app.use(express.static(__dirname + "/public"))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
var port = process.env.port || 3000;
app.post("/result", (req, res) => {
    var operation = req.body.operation
    var numA = parseFloat(req.body.numA)
    var numB = parseFloat(req.body.numB)
    var showDecimal = req.body.showDecimal
    return res.send("Answer: " + calculate(operation, numA, numB, showDecimal))
})
function calculate(operation, numA, numB, showDecimal)
{
    var ans = 0
    if (operation == "add")
    {
        ans = numA + numB
    }
    else if (operation == "sub")
    {
        ans = numA - numB
    }
    else if (operation == "mul")
    {
        ans = numA * numB
    }
    else if (operation == "div")
    {
        ans = numA / numB
    }
    else if (operation == "mod")
    {
        ans = numA % numB
    }
    else if (operation == "pow")
    {
        ans = numA ** numB
    }
    if (showDecimal)
        return ans
    else
        return Math.round(ans)
}
app.listen(port, ()=> {
    console.log(port)
})