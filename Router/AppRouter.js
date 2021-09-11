const express = require("express");
//import multer
const multer = require("multer");
//import controllers
const {
  getAllPlants,
  getPlantByID,
  addPlant,
} = require("../Controller/ControlApp");

// multer config
const storeFiles = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "../client/public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    // cb(null, Date.now() + "--" + file.originalname)
  },
});

const upload = multer({ storage: storeFiles });

const router = express.Router();

//get all plants
router.get("/get", getAllPlants);

// get plant by ID
router.get("/plant/:id", getPlantByID);

//add new plant
router.post("/add", upload.array("images", 10), addPlant);

//test heroku
router.get("/testhero", (req, res) => {
  res.send("...heroku connect success...");
});

module.exports = router;
