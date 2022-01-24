import express, {json} from "express";
import cors from "cors";



const server = express();
server.use(cors());
server.use(json());

const users = [];
const tweets=[];
const listTweets=[];


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
    
    let avatar='';   
    tweets.push(tweet);    
    for(let i=0;i<users.length;i++){   
        for(let j=0;j<tweets.length;j++){
            if(users[i].username===tweets[j].username){
                avatar=users[i].avatar
            }
        }  
    }                  
      
    const newTweet = {
      ...tweet,
      "avatar": avatar
    }
    listTweets.push(newTweet);
    
    res.send("ok");
});
server.get('/tweets',(req,res)=>{    
    if(listTweets.length < 10){
        res.send(listTweets);
      }else{
        res.send(listTweets.slice((listTweets.length - 10), listTweets.length));
      }
});

server.listen(5000,()=>{
    console.log("Rodando em http://localhost:5000");
});


