// adminOnly.js

module.exports = (req, res, next) => {
  const allowedAdmins = [
    "tesla_nikola@tradx.in",
    "pinkman.walter@tradx.br"
  ];

  if (!req.user || !req.user.email) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // convert both login email AND admin emails to lowercase
  const userEmail = req.user.email.toLowerCase();

  if (!allowedAdmins.includes(userEmail)) {
    return res.status(403).json({ message: "Access Denied. Not an admin." });
  }

  next();
};
