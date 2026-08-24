const register = async (req, res) => {
  const { name, email, role } = req.body;
  return res.status(201).json({
    message: "Registration endpoint is ready. Add password hashing and DB save.",
    data: { name, email, role }
  });
};

const login = async (req, res) => {
  const { email } = req.body;
  return res.status(200).json({
    message: "Login endpoint is ready. Add JWT/session logic.",
    data: { email }
  });
};

module.exports = { register, login };
