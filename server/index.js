const express=require("express");
const port=3007;
const app=express();
app.get("/users",(req,res)=>{
    res.send("view users data");
    
})
app.post("/users",(req,res)=>{
    res.send("post request to create");

})
app.patch("/users",(req,res)=>{
    res.send("patch requests to update user data");

})
app.delete("/users",(req,res)=>{
    res.send("view users data");

})

app.listen(port,()=>{
    console.log(`Server is running ${port}`);
    
})