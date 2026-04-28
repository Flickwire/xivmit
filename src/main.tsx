import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./routes/index";
import Fight from "./routes/fight";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:fightId" element={<Fight />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
