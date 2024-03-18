const  express = require("express")
const app = express();

const users = [{
    name : 'jatin',
    age : 20,
    kidney:[{
        healthy : true
    }]
}];

app.use(express.json());

app.get("/", function(req,res){
    // write logic how many kidney healthy he have
    const johnKidney = users[0].kidney;
    const totalKidney = johnKidney.length;
    let noOfHealthyKidney =0;
    for(let i =0;i<johnKidney.length;i++){
        if(johnKidney[i].healthy){
            noOfHealthyKidney+=1;
        }
    }
    let totalUnhealthy = totalKidney - noOfHealthyKidney;

    res.json({
        totalKidney,
        noOfHealthyKidney,
        totalUnhealthy
    })
})
app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg : "done!"
    })
})

app.put("/", function(req,res){
    for(let i =0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy = true;
    }
    res.json({
        msg : "done!"
    })
})

app.delete("/", function(req,res){
    const newKidney = [];
    for(let i=0;i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy){
            newKidney.push({
                healthy : true
            })
        }
    }
    users[0].kidney = newKidney;

    res.json({
        msg:"done   "
    })
})


app.listen(3000)