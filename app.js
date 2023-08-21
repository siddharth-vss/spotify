let express = require('express');
let app = express();
let path = require('path');
let port =2056;


app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})



app.listen(port,()=>{
    console.log(`port running on http://localhost:${port}`)
})