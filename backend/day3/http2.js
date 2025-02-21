const http=require('http');

// const fs=require("fs promises");
const port=3002;


const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.statusCode=200;
    const data=await fetch("http://dummyjson.com/recipes");
    const jsondata =await data.json();
    const newjsondata =await jsondata.recipes;
    newjsondata.map((re)=>{
        const rdata="<h1 style='color:red'>"+re.name+"</h1>";
        res.write(rdata)
    })
    res.end(JSON.stringify(names));



});
server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`Server is running on port ${port}`);

    }
    catch(err){
        console.log("Server Erroe :",err.message);
    }
})