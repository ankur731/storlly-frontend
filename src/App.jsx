import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
