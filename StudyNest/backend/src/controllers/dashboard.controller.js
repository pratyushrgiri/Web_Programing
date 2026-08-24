const getDashboard = async (req, res) => {
  const { role } = req.user;

  const responseByRole = {
    student: {
      cards: ["name", "semester", "today schedule", "today assignments"],
      sections: ["assignments", "notes", "reports"]
    },
    teacher: {
      cards: ["name", "classes", "schedule", "student assignments"],
      sections: ["assignments", "ratings", "reports"]
    },
    admin: {
      cards: ["student activities", "teacher activities", "records", "routing"],
      sections: ["records", "routing", "reports"]
    }
  };

  return res.status(200).json({
    message: "Dashboard template payload.",
    role,
    data: responseByRole[role] || responseByRole.student
  });
};

module.exports = { getDashboard };
