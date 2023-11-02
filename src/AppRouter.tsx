import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Work } from "./components/Work/Work";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
};
