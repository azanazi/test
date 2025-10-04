import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// GET all students
router.get("/", async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
});

// POST create student
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
