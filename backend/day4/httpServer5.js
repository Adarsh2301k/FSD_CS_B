const http=require("http");
const port=3004;
const server=http.createServer((req,res)=>{
    const data=[{
        "id":"1",
        "name":"Adarsh",
        "email":"adarsh@gmail.com"
    },{
        "id":"2",
        "name":"Akash",
        "email":"akash@gmail.com"
    },{
        "id":"3",
        "name":"Adarsh",
        "email":"adarsh@gmail.com"
    }];
    data.map((i)=>{
        const rdata="<p>"+i.name+" "+i.email+" </p>";
        res.write(rdata);
    })
    res.end();


})

server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is running");
        
    }
    catch(err){
        console.log("Server error",err.message);
        
    }

})