import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Reset from "../styles/reset";
import Styles from "../styles/styles";
import Header from "./Header";
import MoviesPage from "../pages/MoviesPage";
import SchedulePage from "../pages/SchedulePage";
import SeatsPage from "../pages/SeatsPage";
import SuccessPage from "../pages/SuccessPage";

export default function App() {
  const [sessionInfo, setSessionInfo] = useState([]);
  const [seatsNumber, setSeatsNumber] = useState([]);
  const [orderInfo, setOrderInfo] = useState();

  return (
    <BrowserRouter>
      <Reset />
      <Styles />
      <Header />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/filme/:movieID" element={<SchedulePage />} />
        <Route
          path="/sessao/:sessionID"
          element={
            <SeatsPage
              sessionInfo={sessionInfo}
              setSessionInfo={setSessionInfo}
              seatsNumber={seatsNumber}
              setSeatsNumber={setSeatsNumber}
              setOrderInfo={setOrderInfo}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <SuccessPage
              sessionInfo={sessionInfo}
              seatsNumber={seatsNumber}
              orderInfo={orderInfo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
