import { Route, Routes } from "react-router-dom";

import { Inicio } from "./Inicio";
import { ProductosLista } from "./productos/index";
import React from "react";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductosLista />} />
      </Routes>
    </section>
  );
};