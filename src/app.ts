import express,{Application,Request,Response,NextFunction} from 'express';


const app:express.Application =express();

const add =(a:number,b:number):number=>a+b;



app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    console.log(add(5,5))
    res.send('hello');
});

app.listen(4000,()=>console.log("サーバーが起動しました"));