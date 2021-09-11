const plantsModel = require("../ModelDB/ModelConfig");

//get all plants
const getAllPlants = (req, res) => {
  plantsModel
    .find()
    .then((plants) => res.json(plants))
    .catch((err) => console.log(err));
};

// get plant by ID
const getPlantByID = (req, res) => {
  const id = req.params.id;

  plantsModel
    .findById(id)
    .then((plant) => res.json(plant))
    .catch((err) => console.log(err));
};

// insert new plant
const addPlant = (req, res) => {
  //get array getImages
  const listPhotos = req.files;
  let photoNames = [];
  listPhotos.map((photo) => photoNames.push(photo.originalname));

  const newPlant = new plantsModel({
    name: req.body.name,
    mainTitle: req.body.mainTitle,
    titles: req.body.titles,
    descs: req.body.descs,
    price: req.body.price,
    images: photoNames,
    class: req.body.class,
    count: req.body.count,
    getPlantTitle: req.body.getPlantTitle,
    getPlantDesc: req.body.getPlantDesc,
  });

  newPlant
    .save()
    .then(res.send("new plan save to DB"))
    .catch((err) => console.log(err));
};

module.exports = { getAllPlants, getPlantByID, addPlant };
