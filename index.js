import express, {json} from "express";
import cors from "cors";



const server = express();
server.use(cors());
server.use(json());

const users = [];
const tweets=[];

server.post('/sign-up', (req, res) => {
    const user = req.body;   
    users.push(user);
    res.send("ok");
});
server.get('/sign-up',(req,res)=>{
    res.send(users);
});

server.post('/tweets',(req,res)=>{
    const tweet=req.body;
    tweets.push(tweet);
    res.send("ok");
});
server.get('/tweets',(req,res)=>{
    if(tweets.length < 10){
        res.send(tweets);
      }else{
        res.send(tweets.slice((tweets.length - 10), tweets.length));
      }
});

server.listen(5000,()=>{
    console.log("Rodando em http://localhost:5000")
});


