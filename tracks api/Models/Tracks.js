const mongoose=require("mongoose");

const TracksSchema=new mongoose.Schema({
    trackName: {
        type: String,
        required:true
        }
    })

mongoose.model("Tracks",TracksSchema);