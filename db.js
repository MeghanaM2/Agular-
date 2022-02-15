const mysql=require('mysql2');
const express=require('express');
var app=express();
const parser=require('body-parser');
app.use(parser.json());
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Meghana1841129!',
    database:'houseforsalebuy'
});
connection.connect((err)=>
{
    if(!err) 
    console.log('DB connected');
    else
    console.log('Error');
})
app.listen(5700,()=>console.log('server started...'));
app.get('/buyerinformation',(req,res)=>
{
    connection.query('SELECT * FROM buyer',(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log("error");
    })
})
app.get('/buyerinformation/:buyerName',(req,res)=>
{
    connection.query('SELECT * FROM buyer WHERE buyerName=?',[req.params.buyerName],(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log("error");
    })
})
app.get('/add',(req,res)=>
{
    var post={buyerAadhaar:123456782303,phone:9087906762,buyerName:'Lalisa'};
    var sql='INSERT INTO buyer SET ?';
    var query=connection.query(sql,post,(err,result)=>
    {
        if (err) throw err;
        res.send("Inserted Rows...");
    })
});

app.get('/update/:phone',(req,res)=>
{
    var name1='LaLisa'
    var sql=`UPDATE buyer SET buyerName='${name1}' WHERE phone= '${req.params.phone}'`;
    var query=connection.query(sql,(err,result)=>
    {
        if (err) throw err;
        res.send("Inserted Updated...");
    })
});