import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";

function Classes() {
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({ subject_id: "", student_id: "", teacher_id: "", schedule: "" });
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const fetchData = async () => {
    const [classRes, studentRes, teacherRes, subjectRes] = await Promise.all([
      API.get("/classes"),
      API.get("/students"),
      API.get("/teachers"),
      API.get("/subjects"),
    ]);
    setClasses(classRes.data);
    setStudents(studentRes.data);
    setTeachers(teacherRes.data);
    setSubjects(subjectRes.data);
  };

  const handleAdd = async () => {
    await API.post("/classes", form);
    setForm({ subject_id: "", student_id: "", teacher_id: "", schedule: "" });
    fetchData();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <h2>Class Schedule</h2>
      <div style={{ marginBottom: "20px" }}>
        <select value={form.subject_id} onChange={(e) => setForm({ ...form, subject_id: e.target.value })}>
          <option value="">Select Subject</option>
          {subjects.map(s => <option key={s.id} value={s.id}>{s.subject_name}</option>)}
        </select>
        <select value={form.student_id} onChange={(e) => setForm({ ...form, student_id: e.target.value })}>
          <option value="">Select Student</option>
          {students.map(s => <option key={s.id} value={s.id}>{s.first_name} {s.last_name}</option>)}
        </select>
        <select value={form.teacher_id} onChange={(e) => setForm({ ...form, teacher_id: e.target.value })}>
          <option value="">Select Teacher</option>
          {teachers.map(t => <option key={t.id} value={t.id}>{t.first_name} {t.last_name}</option>)}
        </select>
        <TextField
          label="Schedule"
          type="datetime-local"
          value={form.schedule}
          onChange={(e) => setForm({ ...form, schedule: e.target.value })}
        />
        <Button onClick={handleAdd} variant="contained" style={{ marginLeft: "10px" }}>Add Class</Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Student</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell>Schedule</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classes.map(c => (
            <TableRow key={c.id}>
              <TableCell>{c.id}</TableCell>
              <TableCell>{c.subject_id}</TableCell>
              <TableCell>{c.student_id}</TableCell>
              <TableCell>{c.teacher_id}</TableCell>
              <TableCell>{new Date(c.schedule).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Classes;
