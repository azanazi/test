import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({ first_name: "", last_name: "", reg_no: "", sex: "male" });

  const fetchTeachers = async () => {
    const res = await API.get("/teachers");
    setTeachers(res.data);
  };

  const handleAdd = async () => {
    await API.post("/teachers", form);
    setForm({ first_name: "", last_name: "", reg_no: "", sex: "male" });
    fetchTeachers();
  };

  useEffect(() => { fetchTeachers(); }, []);

  return (
    <div>
      <h2>Teachers</h2>
      <div style={{ marginBottom: "20px" }}>
        <TextField label="First Name" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
        <TextField label="Last Name" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
        <TextField label="Reg No" value={form.reg_no} onChange={(e) => setForm({ ...form, reg_no: e.target.value })} />
        <select value={form.sex} onChange={(e) => setForm({ ...form, sex: e.target.value })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <Button onClick={handleAdd} variant="contained" style={{ marginLeft: "10px" }}>Add Teacher</Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Reg No</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Sex</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map(t => (
            <TableRow key={t.id}>
              <TableCell>{t.id}</TableCell>
              <TableCell>{t.reg_no}</TableCell>
              <TableCell>{t.first_name}</TableCell>
              <TableCell>{t.last_name}</TableCell>
              <TableCell>{t.sex}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Teachers;
