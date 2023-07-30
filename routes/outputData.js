const express = require("express");
const router = express.Router();

const {statistics} = require("../controllers/statistics");
const {pieChart} = require("../controllers/PieChart");
const {barChart} = require("../controllers/barChart");

router.get("/getStats", statistics);
router.get("/pieChart",pieChart);
router.get("/barChart",barChart);


module.exports = router;