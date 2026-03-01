import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import ScanUpload from "./pages/ScanUpload/ScanUpload";
import Upload from "./pages/Upload/Upload"; // 1. Import the Upload page
import Result from "./pages/Result/Result";
import Records from "./pages/Records/Records";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scan-upload" element={<ScanUpload />} />
          <Route path="upload" element={<Upload />} /> {/* 2. Add this route */}
          <Route path="result" element={<Result />} />
          <Route path="records" element={<Records />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
