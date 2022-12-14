import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import AddProperty from "./screens/AddProperty";
import MiniDrawer from "./components/MiniDrawer";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Routes>
          <Route path="/indiassetz-dasboard" element={<Dashboard />} />
          <Route
            path="/indiassetz-dasboard/add-property"
            element={<AddProperty />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
