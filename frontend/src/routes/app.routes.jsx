import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Notes } from "../pages/Notes";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";
import { EditBiologist } from "../pages/EditBiologist";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />
      <Route path="/biologist/:id" element={<Home />} />
      <Route path="/biologist/:id/patients" element={<Notes />} />
      <Route path="/biologist/:id/patients/:patientId" element={<Details />} />
      <Route path="/biologist/:id/patients/:patientId/edit" element={<New />} />
      <Route path="/biologist/:id/new" element={<New />} />
      <Route path="/biologist/:id/edit" element={<EditBiologist />} />
    </Routes>
  );
}
