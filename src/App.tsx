import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./features/home/Page";
import CalendarPage from "./features/calendar/Page";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
