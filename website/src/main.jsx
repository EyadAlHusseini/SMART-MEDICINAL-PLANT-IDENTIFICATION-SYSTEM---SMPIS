import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/DataContext"; // Import this
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      {" "}
      {/* Wrap here */}
      <App />
    </DataProvider>
  </React.StrictMode>,
);
