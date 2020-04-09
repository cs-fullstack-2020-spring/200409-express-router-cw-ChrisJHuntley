let express=require('express')
let app=express()

let portNumber=8001;
let api=require('./routes/api.js')
let admin=require('./routes/admin.js')

// !! you have to specify the module as the second parameter in the `use()` method
app.use('/api')
 app.use('/api','api');
 app.use('/admin', admin);


 

 app.listen(portNumber, ()=>{
     console.log(`${portNumber}`)
 })

