const mockAuth = (req, _res, next) => {
  req.user = {
    id: req.headers["x-user-id"] || "dev-user",
    role: req.headers["x-user-role"] || "student"
  };
  next();
};

const permitRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden for this role." });
  }
  next();
};

module.exports = { mockAuth, permitRoles };
