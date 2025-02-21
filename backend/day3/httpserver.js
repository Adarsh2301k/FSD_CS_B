const http=require("http");
const fs=require("fs/promises")
const server=http.createServer(async(req,res)=>{
const url=req.url;
if(url=="/home"  && req.method=="GET"){
    const data=await fs.readFile("./home.html")
    res.write(data)
}
else if(url==="/about" && req.method=="GET"){
    const da=await fs.readFile("./about.html")
    res.write(da)

}else{
    res.write("404 Error : Page not found")
}
res.end();

});
server.listen(3001,(err)=>{
    try{ 
        if(err) throw err;

    }
    catch(err){
        console.log("SErver Error ",err.message);

    }

});
