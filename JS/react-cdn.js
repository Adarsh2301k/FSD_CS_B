const parent = document.getElementById("root");
const ele=React.createElement("h1",{},"Shoping Cart");
const root=ReactDOM.createRoot(parent) ;
// root.render(ele);
const ele1=React.createElement("h1",{},"My items");
const item1=React.createElement("li",{},"My items-1");
const item2=React.createElement("li",{},"My items-2");
const list=React.createElement("ul",{},item1,item2);
const h2=<h2>this is new heading</h2>;

root.render([ele,ele1,list]);

