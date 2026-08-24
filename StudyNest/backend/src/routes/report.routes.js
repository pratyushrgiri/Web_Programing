const router = require("express").Router();
const { listReports, createReport } = require("../controllers/report.controller");

router.get("/", listReports);
router.post("/", createReport);

module.exports = router;
