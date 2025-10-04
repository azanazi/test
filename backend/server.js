import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
// import other routes similarly

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
// app.use("/api/teachers", teacherRoutes);
// app.use("/api/subjects", subjectRoutes);
// app.use("/api/classes", classScheduleRoutes);
// app.use("/api/payments", paymentRoutes);
// app.use("/api/payroll", payrollRoutes);
// app.use("/api/users", userRoutes);

// Sync DB & start server
sequelize.sync().then(() => {
  console.log("Database synced ✅");
  app.listen(5000, () => console.log("Server running on http://localhost:5000"));
}).catch(err => console.error("DB connection error: ", err));
