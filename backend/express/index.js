const express=require("express");
const connectDb=require("./db");
const app = express();

app.use((req,res,next)=>{
  res.setHeader("Access-control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
     "Origin,X-Requested-With,Content-Type,Accept"
  )
 next();
})


app.use(express.json());
app.use('/api',require("../Routes/createUser"));
app.use('/api',require("../Routes/Display"));
app.get('/',(req,res)=>{
  res.send("hello world");

})
app.listen(5000,()=>{
  console.log("listening to the port");
});


connectDb();
