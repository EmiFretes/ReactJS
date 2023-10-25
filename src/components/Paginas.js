import { Route, Routes } from "react-router-dom";

import { Inicio } from "./Inicio";
import { ProductoDetalle } from "./productos/ProductoDetalle";
import { ProductosLista } from "./productos/index";
import React from "react";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/productos" exact element={<ProductosLista />} />
        <Route path="/producto/:id" exact element={<ProductoDetalle />} />
      </Routes>
    </section>
  );
};