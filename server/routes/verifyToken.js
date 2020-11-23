const jwt = require("jsonwebtoken");

//for any route to be protected
module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send("access deined");
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("invalid token");
  }
};
