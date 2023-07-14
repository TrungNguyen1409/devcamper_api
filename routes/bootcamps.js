const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "show all bootcamps " });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: "delete bootcamp" });
});

module.exports = router;
