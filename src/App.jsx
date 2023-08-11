import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import View from "./pages/View";
import Add from "./pages/Add";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient/add" element={<Add />} />
          <Route path="/patient/edit/:id" element={<Edit />} />
          <Route path="/patient/view/:id" element={<View />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
