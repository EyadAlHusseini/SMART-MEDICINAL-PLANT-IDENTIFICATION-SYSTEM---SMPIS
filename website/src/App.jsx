import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import ScanUpload from "./pages/ScanUpload/ScanUpload";
import Upload from "./pages/Upload/Upload";
import Result from "./pages/Result/Result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Everything inside DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          {/* Default */}
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scan-upload" element={<ScanUpload />} />
          <Route path="upload" element={<Upload />} />
          <Route path="result" element={<Result />} />

          {/* Safety fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
