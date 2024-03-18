const express = require("express")
const app = express();

let kidID = 2;
let username = "jatin";
let password = 'done';


function middleware(req,res,next){
    if(username!="jatin" || password!='pass'){
        res.status(402).json({
            msg : "something went wrong in middle"
        })
    }
    else{
        next();
    }
}
function kidneyware(req,res,next){
    if(kidID!=1 || password!='pass'){
        res.status(402).json({
            msg : "something went wrong in kidney"
        })
    }
    else{
        next();
    }
}


app.get("/" ,kidneyware ,middleware  , function(req,res){

    res.send("hello there")
})

app.listen(3000);
