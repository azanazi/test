import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Teacher = sequelize.define("Teacher", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  reg_no: { type: DataTypes.STRING(10), allowNull: false },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  sex: DataTypes.ENUM("male", "female"),
  address: DataTypes.TEXT,
  education_level: DataTypes.STRING,
  phone_number: DataTypes.STRING(10),
  identification_number: DataTypes.BIGINT,
  photo: DataTypes.STRING,
  state: DataTypes.ENUM("active", "inactive")
}, { tableName: "teachers" });

export default Teacher;
