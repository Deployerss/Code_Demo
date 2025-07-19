const express=require("express")
const router=express.Router();
const aiController=require("../controllers/ai.controller");
const {aiRateLimiter} = require("../middleware/rateLimit");

router.post('/getreview', aiRateLimiter,aiController.getReview );
router.get('/getreview', (req, res) => {
  res.status(200).send("AI Review API is reachable via GET");
});


module.exports=router;

