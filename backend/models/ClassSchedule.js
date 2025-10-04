import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Student from "./Student.js";
import Teacher from "./Teacher.js";
import Subject from "./Subject.js";

const ClassSchedule = sequelize.define("ClassSchedule", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  student_id: { type: DataTypes.INTEGER, references: { model: Student, key: "id" } },
  teacher_id: { type: DataTypes.INTEGER, references: { model: Teacher, key: "id" } },
  subject_id: { type: DataTypes.INTEGER, references: { model: Subject, key: "id" } },
  date_time: DataTypes.DATE
}, { tableName: "class_schedule" });

export default ClassSchedule;
