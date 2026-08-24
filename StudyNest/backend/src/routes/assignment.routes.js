const router = require("express").Router();
const {
  listAssignments,
  createAssignment,
  evaluateAssignment
} = require("../controllers/assignment.controller");
const { permitRoles } = require("../middleware/auth.middleware");

router.get("/", listAssignments);
router.post("/", permitRoles("teacher", "admin"), createAssignment);
router.patch("/:assignmentId/evaluate", permitRoles("teacher", "admin"), evaluateAssignment);

module.exports = router;
