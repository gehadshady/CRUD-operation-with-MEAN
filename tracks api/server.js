const express=require("express"),
    mongoose=require("mongoose"),
    trackRouter=require("./Routes/trackRouter"),
    body_parser=require("body-parser").json();


//1-create server
const app=express();

app.listen(8080,()=>{
    console.log("I'm listining")
})


//db connection
mongoose.connect("mongodb://localhost:27017/examSystem",{
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// app.use((req,res,next)=>{
//     res.status(200).json({message:"hi"})
// })

app.use(body_parser);
/****** Router *****/

app.use("/",trackRouter);

