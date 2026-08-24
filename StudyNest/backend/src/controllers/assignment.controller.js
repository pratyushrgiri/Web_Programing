const listAssignments = async (req, res) => {
  return res.status(200).json({ message: "List assignments endpoint placeholder." });
};

const createAssignment = async (req, res) => {
  return res.status(201).json({
    message: "Create assignment endpoint placeholder.",
    payload: req.body
  });
};

const evaluateAssignment = async (req, res) => {
  const { assignmentId } = req.params;
  return res.status(200).json({
    message: "Evaluate assignment endpoint placeholder.",
    assignmentId,
    payload: req.body
  });
};

module.exports = { listAssignments, createAssignment, evaluateAssignment };
