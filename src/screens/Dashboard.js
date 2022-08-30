import React from "react";
import { Box } from "@mui/material";
import { AreaChart } from "../components/AreaChart/AreaChart";
import Calendar from "../components/Calendar";
import Cards from "../components/Cards";
import Header from "../components/Header/Header";
import Insights from "../components/Insights";

export default function Dashboard() {
  return (
    <Box sx={{ width: "100%", p: 4 }}>
      <Header />
      <Insights />
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
        <Box sx={{ width: "28%", height: "100%" }}>
          <Calendar />
        </Box>
      </Box>
    </Box>
  );
}
