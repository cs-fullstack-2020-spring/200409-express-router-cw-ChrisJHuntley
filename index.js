let express=require('express')
let app=express()

let portNumber=8001;
let api=require('./routes/api.js')
let admin=require('./routes/admin.js')
   
app.use('/api')
 app.use('/api','api');
 app.use('/admin', admin);


 

 app.listen(portNumber, ()=>{
     console.log(`${portNumber}`)
 })

