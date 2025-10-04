import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [form, setForm] = useState({ student_id: "", subject_id: "", amount: "" });
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const fetchData = async () => {
    const [paymentRes, studentRes, subjectRes] = await Promise.all([
      API.get("/payments"),
      API.get("/students"),
      API.get("/subjects"),
    ]);
    setPayments(paymentRes.data);
    setStudents(studentRes.data);
    setSubjects(subjectRes.data);
  };

  const handleAdd = async () => {
    await API.post("/payments", form);
    setForm({ student_id: "", subject_id: "", amount: "" });
    fetchData();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <h2>Payments</h2>
      <div style={{ marginBottom: "20px" }}>
        <select value={form.student_id} onChange={(e) => setForm({ ...form, student_id: e.target.value })}>
          <option value="">Select Student</option>
          {students.map(s => <option key={s.id} value={s.id}>{s.first_name} {s.last_name}</option>)}
        </select>
        <select value={form.subject_id} onChange={(e) => setForm({ ...form, subject_id: e.target.value })}>
          <option value="">Select Subject</option>
          {subjects.map(s => <option key={s.id} value={s.id}>{s.subject_name}</option>)}
        </select>
        <TextField
          label="Amount"
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <Button onClick={handleAdd} variant="contained" style={{ marginLeft: "10px" }}>Add Payment</Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Student</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map(p => (
            <TableRow key={p.id}>
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.student_id}</TableCell>
              <TableCell>{p.subject_id}</TableCell>
              <TableCell>{p.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Payments;
