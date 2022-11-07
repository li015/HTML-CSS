import { Router } from "express";
import ScoreCard from "../models/ScoreCard";
  const router = Router();
  router.delete("/cards",(req, res) => {
    res.json({ msg: 'delete'  })
  })
  router.post("/card", (req, res) => {
    res.json({ msg: 'post'  })
  })
  router.get("/cards",(req, res) => {
    res.json({ msg: 'get'  })
  })
  export default router;
