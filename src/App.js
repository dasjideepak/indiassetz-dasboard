import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import AddProperty from "./screens/AddProperty";
import MiniDrawer from "./components/MiniDrawer";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-property" element={<AddProperty />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
