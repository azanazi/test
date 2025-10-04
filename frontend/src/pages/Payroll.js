import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";

function Payroll() {
  const [payrolls, setPayrolls] = useState([]);
  const [form, setForm] = useState({ teacher_id: "", amount: "" });
  const [teachers, setTeachers] = useState([]);

  const fetchData = async () => {
    const [payrollRes, teacherRes] = await Promise.all([
      API.get("/payroll"),
      API.get("/teachers"),
    ]);
    setPayrolls(payrollRes.data);
    setTeachers(teacherRes.data);
  };

  const handleAdd = async () => {
    await API.post("/payroll", form);
    setForm({ teacher_id: "", amount: "" });
    fetchData();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <h2>Payroll</h2>
      <div style={{ marginBottom: "20px" }}>
        <select value={form.teacher_id} onChange={(e) => setForm({ ...form, teacher_id: e.target.value })}>
          <option value="">Select Teacher</option>
          {teachers.map(t => <option key={t.id} value={t.id}>{t.first_name} {t.last_name}</option>)}
        </select>
        <TextField
          label="Amount"
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <Button onClick={handleAdd} variant="contained" style={{ marginLeft: "10px" }}>Add Payroll</Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payrolls.map(p => (
            <TableRow key={p.id}>
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.teacher_id}</TableCell>
              <TableCell>{p.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Payroll;
