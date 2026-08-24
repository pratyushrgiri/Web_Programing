const router = require("express").Router();
const {
  getActivityOverview,
  updateStudentSemester
} = require("../controllers/admin.controller");
const { permitRoles } = require("../middleware/auth.middleware");

router.get("/overview", permitRoles("admin"), getActivityOverview);
router.patch("/students/:studentId/semester", permitRoles("admin"), updateStudentSemester);

module.exports = router;
