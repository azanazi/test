import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  username: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  authority: DataTypes.ENUM("manager","register","partner","HR","finance"),
  security_level: DataTypes.INTEGER,
  phone_number: DataTypes.STRING(10),
  photo: DataTypes.STRING,
  identification_number: DataTypes.BIGINT,
  state: DataTypes.ENUM("active","inactive")
}, { tableName: "users" });

export default User;
