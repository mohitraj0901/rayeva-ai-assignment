const express = require("express");
const router = express.Router();

const {
  generateCategory,
  generateProposal
} = require("../controllers/aiController");

router.post("/category", generateCategory);
router.post("/proposal", generateProposal);

module.exports = router;