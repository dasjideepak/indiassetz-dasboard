import { Box } from "@mui/material";
import React from "react";
import { AreaChart } from "../components/AreaChart/AreaChart";
import Calendar from "../components/Calendar";
import Cards from "../components/Cards";

export default function Dashboard() {
  return (
    <Box sx={{ width: "100%", p: 4 }}>
      <Cards />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "68%" }}>
          <AreaChart />
        </Box>
        <Box sx={{ width: "28%" }}>
          <Calendar />
        </Box>
      </Box>
    </Box>
  );
}
