const express = require('express')



const app = express();

const port = 3000;


let items =[
    {
        id:1,
        name:'item1',
    },
    {
        id:2,
        name:'item2',
    },
    {
        id:3,
        name:'item3',
    }
]

app.use(express.json())

app.get('/items',(req,res)=>{
    res.json(items)
})

app.post('/items',(req,res)=>{
    console.log(req.body)
    const {name} = req.body
    const newItem = {name,id :items.length+1};
    items.push(newItem)
    res.json(items)

})

app.get('/items/:id',(req,res)=>{
    console.log("in hre")
    const id = parseInt(req.params.id,10);

    const item = items.find((i)=>i.id == id);

    return res.json(item)

})


app.listen(port,()=>{
    console.log(`started on ${port}`)
})