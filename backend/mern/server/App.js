const express =require("express")
const app=express();
const port=3001;

const products=[{
    id:101,
    name:"Laptop",
    price:"55000",
    quantity :10
}];
app.use(express.json())
app.get("/products",(req,res)=>{
    res.status(200);
    res.json(products);
})

app.get("/product/:id",(req,res)=>{
    const pid=parseInt(req.params.id);
    let index=products.findIndex(ind=>ind.id==pid)
   let foundProduct={};
    if(index==-1){
        res.status(400)
        res.json({status:"fail", message:"Product id not found"})
    }else{
        foundProduct=products[index]
        res.status(200)
        res.json({status:"success", message:"Product  found",foundProduct})
    }

    
})

app.post("/products",(req,res)=>{
    const {id,title,price,quantity}=req.body;
    if(!id || !title ||!price || !quantity){
        res.status(400);
        res.json({status :"fail",message:"All field required"})
    }
    else{
        const newProduct={
            id,title,price,quantity
        }
        products.push(newProduct);
        res.status(201);
        res.json({status:"Success",message:"product created successfully" ,newProduct})
    }
})

app.listen(port,(err)=>{
    try{
        if(err) throw err;
        else{
            console.log(`Server is running ${port}`);
        }
    }catch(err){
        console.log("Server error :",err.message);
    }

})