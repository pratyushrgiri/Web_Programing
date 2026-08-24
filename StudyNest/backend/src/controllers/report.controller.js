const listReports = async (_req, res) => {
  return res.status(200).json({ message: "List reports endpoint placeholder." });
};

const createReport = async (req, res) => {
  return res.status(201).json({
    message: "Create report endpoint placeholder.",
    payload: req.body
  });
};

module.exports = { listReports, createReport };
