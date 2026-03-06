const ClothingItem = require("../models/clothingItem");

const createItem = (req, res, next) => {
  const { name, weather, imageUrl } = req.body;

  ClothingItem.create({
    name,
    weather,
    imageUrl,
    owner: req.user._id,
  })
    .then((item) => res.status(201).send(item))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Invalid data" });
      }

      return next(err);
    });
};

const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.status(200).send(items))
    .catch((err) => {
      res.status(500).send({ message: "Error from getItems", err });
    });
};

const updateItem = (req, res) => {
  const { itemId } = req.params;
  const { imageUrl } = req.body;

  ClothingItem.findByIdandUpdate(itemId, { $set: { imageUrl } })
    .orFail()
    .then((item) => res.status(200).send(item))
    .catch((err) => {
      res.status(500).send({ message: "Error from getItem", err });
    });
};

const deleteItem = (req, res, next) => {
  const { itemId } = req.params;

  ClothingItem.findById(itemId)
    .orFail()
    .then((item) => {
      if (item.owner.toString() !== req.user._id) {
        return res.status(403).send({ message: "Forbidden" });
      }

      return ClothingItem.findByIdAndDelete(itemId).then(() =>
        res.send({ message: "Item deleted" })
      );
    })
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Item not found" });
      }

      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid item id" });
      }

      return next(err);
    });
};

const likeItem = (req, res, next) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((item) => {
      if (!item) {
        const err = new Error("Item not found");
        err.statusCode = 404;
        throw err;
      }
      res.status(200).send(item);
    })
    .catch((err) => {
      const error = err;
      if (error.name === "CastError") {
        error.statusCode = 400;
      }
      next(error);
    });
};

const dislikeItem = (req, res, next) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((item) => {
      if (!item) {
        const err = new Error("Item not found");
        err.statusCode = 404;
        throw err;
      }
      res.status(200).send(item);
    })
    .catch((err) => {
      const error = err;
      if (error.name === "CastError") {
        error.statusCode = 400;
      }
      next(error);
    });
};

module.exports = {
  createItem,
  getItems,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
};
