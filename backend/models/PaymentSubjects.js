import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Payment from "./Payment.js";
import Subject from "./Subject.js";

const PaymentSubjects = sequelize.define("PaymentSubjects", {
  payment_id: { type: DataTypes.INTEGER, references: { model: Payment, key: "id" } },
  subject_id: { type: DataTypes.INTEGER, references: { model: Subject, key: "id" } }
}, { tableName: "payment_subjects" });

export default PaymentSubjects;
