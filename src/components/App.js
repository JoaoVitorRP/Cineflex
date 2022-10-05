import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "../styles/reset";
import Styles from "../styles/styles";
import Header from "./Header";
import MoviePage from "../pages/MoviePage";
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
        <Route path="/" element={<MoviePage />} />
        <Route path="/filme/:movieID" element={<SchedulePage />} />
        <Route path="/sessao" element={<SeatsPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
