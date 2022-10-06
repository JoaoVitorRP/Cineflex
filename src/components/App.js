import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "../styles/reset";
import Styles from "../styles/styles";
import Header from "./Header";
import MoviesPage from "../pages/MoviesPage";
import SchedulePage from "../pages/SchedulePage";
import SeatsPage from "../pages/SeatsPage";
import SuccessPage from "../pages/SuccessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Styles />
      <Header />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/filme/:movieID" element={<SchedulePage />} />
        <Route path="/sessao/:sessionID" element={<SeatsPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
