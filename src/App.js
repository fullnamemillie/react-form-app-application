import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FirstStep from "./pages/FirstStep/FirstStep";
import SecondStep from "./pages/SecondStep/SecondStep";
import ThirdStep from "./pages/ThirdStep/ThirdStep";
import Result from "./pages/Result/Result";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FirstStep />} />
        <Route path="/second" element={<SecondStep />} />
        <Route path="/third" element={<ThirdStep />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
