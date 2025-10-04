import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Teacher from "./Teacher.js";

const Payroll = sequelize.define("Payroll", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  teacher_id: { type: DataTypes.INTEGER, references: { model: Teacher, key: "id" } },
  payroll_period: DataTypes.INTEGER,
  salary: DataTypes.DECIMAL(10,2),
  bonus: DataTypes.DECIMAL(10,2),
  total_payment: DataTypes.DECIMAL(10,2),
  payment_method: DataTypes.STRING,
  date_time: DataTypes.DATE,
  state: DataTypes.ENUM("approved", "pending", "enroll")
}, { tableName: "payroll" });

export default Payroll;
