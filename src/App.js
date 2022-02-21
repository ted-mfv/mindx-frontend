import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/meal/:idMeal" element={<MealDetail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
