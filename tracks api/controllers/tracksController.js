const 
    express=require("express"),
    mongoose=require("mongoose");
    require("../models/Tracks");

    const TracksModel=mongoose.model("Tracks");



// Create and Save a new Track
exports.create = (req, res) => {

    console.log(req);
    let newTrack=TracksModel({
        trackName:req.body.Name
    });

    newTrack.save((err,result)=>{
        if(err)
        {
            console.log(req.body);

            res.send(400);
            console.log(err.message);
        }
        else
        {
            res.send(201,req.body);
            console.log("done")
        }
    })
};

// Retrieve and return all Tracks from the database.
exports.findAll = async (req, res) => {
    
    try {
        const Tracks = await TracksModel.find();
        if (!Tracks.length) 
        {
            return res.status(404).send({
                message: "no tracks found"
            }); 
        }
        else
        {
            res.send(Tracks);
        }
    }
     catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

// Find a single Track with a Id
exports.findOne = (req, res) => {
};

// Update a Track identified by the Id in the request
exports.update = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    else{
        console.log(req.body)
        TracksModel.update({_id:req.params.id},
        {"$set":{
            trackName:req.body.trackName
        }},(err,result)=>{
            if(err)
            {
                console.log(err.message)
                res.status(500).send({
                    message: "Error updating note with id " + req.params.id
                });
            }
            else
                res.status(200).send({ message: "updated"})
        })
    }
};

// Delete a Track with the specified Id in the request
exports.delete = (req, res) => {
    TracksModel.deleteOne({_id:req.params.id},(err,result)=>
    {
        if(err)
            res.status(500).send({
                message: "Error updating note with id " + req.params.id
            });
        else
        {
            if(result)
            {
                res.status(200).send({message:"deleted"})

            }
            else
                res.status(404).send({message:"Not found"})
        }
    })
};