import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./features/home/Page";
import CalendarPage from "./features/calendar/CalendarPage";
// add other pages as needed

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            {/* add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
