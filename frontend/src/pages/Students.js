import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";

function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ first_name: "", last_name: "", reg_no: "", sex: "male" });

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  const handleAdd = async () => {
    await API.post("/students", form);
    setForm({ first_name: "", last_name: "", reg_no: "", sex: "male" });
    fetchStudents();
  };

  useEffect(() => { fetchStudents(); }, []);

  return (
    <div>
      <h2>Students</h2>
      <div style={{ marginBottom: "20px" }}>
        <TextField label="First Name" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
        <TextField label="Last Name" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
        <TextField label="Reg No" value={form.reg_no} onChange={(e) => setForm({ ...form, reg_no: e.target.value })} />
        <select value={form.sex} onChange={(e) => setForm({ ...form, sex: e.target.value })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <Button onClick={handleAdd} variant="contained" style={{ marginLeft: "10px" }}>Add Student</Button>
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
          {students.map(s => (
            <TableRow key={s.id}>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.reg_no}</TableCell>
              <TableCell>{s.first_name}</TableCell>
              <TableCell>{s.last_name}</TableCell>
              <TableCell>{s.sex}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Students;
