import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useData } from "./context/DataContext";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Upload from "./pages/Upload/Upload";
import Result from "./pages/Result/Result";
import Records from "./pages/Records/Records";
import Settings from "./pages/Settings/Settings";
import DataManagement from "./pages/DataManagement/DataManagement";
import Reports from "./pages/Reports/Reports";

// Helper Component: Redirect to login if not authenticated
const PrivateRoute = ({ children }) => {
  const { user } = useData();
  return user ? children : <Navigate to="/login" replace />;
};

// Helper Component: Redirect if not Admin
const AdminRoute = ({ children }) => {
  const { user } = useData();
  return user?.role === "Administrator" ? (
    children
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<Upload />} />
          <Route path="result" element={<Result />} />
          <Route path="records" element={<Records />} />
          <Route path="settings" element={<Settings />} />

          {/* Admin Protected Routes */}
          <Route
            path="DataManagement"
            element={
              <AdminRoute>
                <DataManagement />
              </AdminRoute>
            }
          />
          <Route
            path="reports"
            element={
              <AdminRoute>
                <Reports />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
