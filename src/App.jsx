import { Route, Routes } from "react-router-dom";
import MainLayout from "./@core/Layout/MainLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import axios from "./redux/axios/axios";

/* configure axios interceptor */
axios();

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
