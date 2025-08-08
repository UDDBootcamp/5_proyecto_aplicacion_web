import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ver-personaje/:id" element={<CharacterDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
