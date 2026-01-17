import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import ScanUpload from "./pages/ScanUpload/ScanUpload";
import Upload from "./pages/Upload/Upload";
import Result from "./pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<ScanUpload />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/result" element={<Result />} />
          <Route path="/dashboard" element={<ScanUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
