var express=require('express');
var app=express();
app.set('view engine','jade');
app.get('/',function(req,res)
{
res.render('index',
{title:'WestWorld',message:'Welcome'})
});
var server=app.listen(3000,function() {});

