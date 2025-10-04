import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [form, setForm] = useState({ subject_name: "", teacher_id: "", price: "" });
  const [teachers, setTeachers] = useState([]);

  const fetchSubjects = async () => {
    const res = await API.get("/subjects");
    setSubjects(res.data);
  };

  const fetchTeachers = async () => {
    const res = await API.get("/teachers");
    setTeachers(res.data);
  };

  const handleAdd = async () => {
    await API.post("/subjects", form);
    setForm({ subject_name: "", teacher_id: "", price: "" });
    fetchSubjects();
  };

  useEffect(() => { fetchSubjects(); fetchTeachers(); }, []);

  return (
    <div>
      <h2>Subjects</h2>
      <div style={{ marginBottom: "20px" }}>
        <TextField label="Subject Name" value={form.subject_name} onChange={(e) => setForm({ ...form, subject_name: e.target.value })} />
        <select value={form.teacher_id} onChange={(e) => setForm({ ...form, teacher_id: e.target.value })}>
          <option value="">Select Teacher</option>
          {teachers.map(t => <option key={t.id} value={t.id}>{t.first_name} {t.last_name}</option>)}
        </select>
        <TextField label="Price" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <Button onClick={handleAdd} variant="contained" style={{ marginLeft: "10px" }}>Add Subject</Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Subject Name</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subjects.map(s => (
            <TableRow key={s.id}>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.subject_name}</TableCell>
              <TableCell>{s.teacher_id}</TableCell>
              <TableCell>{s.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Subjects;
