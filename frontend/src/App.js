import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Subjects from "./pages/Subjects";
import Classes from "./pages/Classes";
import Payments from "./pages/Payments";
import Payroll from "./pages/Payroll";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <div style={{ padding: "20px" }}>
            <Routes>
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/payroll" element={<Payroll />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
