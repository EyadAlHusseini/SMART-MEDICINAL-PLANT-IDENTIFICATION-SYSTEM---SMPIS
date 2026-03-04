import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ScanUpload from "./pages/ScanUpload/ScanUpload";
import Upload from "./pages/Upload/Upload";
import Result from "./pages/Result/Result";
import Records from "./pages/Records/Records";
import Reports from "./pages/Reports/Reports";
import DataManagement from "./pages/DataManagement/DataManagement";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scan-upload" element={<ScanUpload />} />
          <Route path="upload" element={<Upload />} />
          <Route path="result" element={<Result />} />
          <Route path="records" element={<Records />} />
          <Route path="Reports" element={<Reports />} />
          <Route path="DataManagement" element={<DataManagement />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
