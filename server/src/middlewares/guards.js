const { getById } = require("../services/furniture");

module.exports = {
  isAuth: () => (req, res, next) => {
    if (!req.user) {
      res.status(401).json({ message: "Please log in" });
    }
    next();
  },
  isOwner: () => async (req, res, next) => {
    // console.log(req.body, req.params);
    const item = await getById(req.params.id);
    if(!item) {
        return res.status(403).json({ message: "Not found" });
    }
    // console.log(item);
    const isOwner = req.user._id == item._ownerId;
    // console.log(isOwner);
    // console.log(req.user._id);
    // console.log(item._ownerId);
    if (!isOwner) {
      return res.status(403).json({ message: "You cannot modify this record" });
    }
    next();
  },
};
