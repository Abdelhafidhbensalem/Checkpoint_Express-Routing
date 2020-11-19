const express=require("express");
const app=express();
const requestTime=require('./middlewares/checktime');
/*app.get('/',(req,res)=>{
    res.send('Hello word')
});*/
app.use(express.json());
app.use(requestTime);
app.use(express.static('public'));
const port=process.env.PORT || 5000;
app.listen(port,(err)=>{
    err?console.log(err):console.log(`the server is running at port ${port}`)
});
