const express=require("express"),
    trackRouter=express.Router(),
    tracksController=require("../controllers/tracksController");

    
  

//enable cors
trackRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


 // Create a new Track
trackRouter.post("/tracks",tracksController.create)

 // Retrieve all Tracks
 trackRouter.get('/tracks', tracksController.findAll);

 // Retrieve a single Track with Id
//  app.get('/notes/:noteId', tracksController.findOne);

  // Update a Track with Id
trackRouter.put('/tracks/:id', tracksController.update);

 // Delete a Track with Id
 trackRouter.delete('/tracks/:id', tracksController.delete);



module.exports=trackRouter;