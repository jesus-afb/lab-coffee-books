const Place = require("../models/Place");
const Update = require("../models/Place");


exports.index = (_, res) => res.redirect("/feed");

exports.feedGet = async (req, res, next) => {
  const places = await Place.find().populate("author");
  res.render("feed", {
    places
  });
};

exports.placeDetail = async (req, res, next) => {
  const {
    id
  } = req.params;
  const place = await Place.findById(id).populate("author");
  res.render("placeDetail", {
    place,
    coordinates: place.location.coordinates
  });
};

exports.placeUpdate = async (req, res, next) => {
  const {
    id
  } = req.params;
  const update = await Update.findById(id).populate("place");
  res.render("update", {
    update,
    coordinates: place.location.coordinates
  });
};