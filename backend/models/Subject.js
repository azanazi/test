import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Teacher from "./Teacher.js";

const Subject = sequelize.define("Subject", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  subject_name: DataTypes.STRING,
  teacher_id: {
    type: DataTypes.INTEGER,
    references: { model: Teacher, key: "id" }
  },
  price: DataTypes.DECIMAL(10,2)
}, { tableName: "subjects" });

export default Subject;
