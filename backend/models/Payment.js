import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Student from "./Student.js";

const Payment = sequelize.define("Payment", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  student_id: { type: DataTypes.INTEGER, references: { model: Student, key: "id" } },
  total_price: DataTypes.DECIMAL(10,2),
  paid_amount: DataTypes.DECIMAL(10,2),
  payment_method: DataTypes.STRING,
  date_time: DataTypes.DATE,
  attachment_number: DataTypes.BIGINT
}, { tableName: "payments" });

export default Payment;
