module.exports = (req, res, next) => {
  req.user = {
    _id: "000000000000000000000001",
  };

  next();
};
