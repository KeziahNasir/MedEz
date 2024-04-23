import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "../pages/Home.jsx";
import Doctor from "../pages/Doctor.jsx";
import NotFound from "../pages/Notfound.jsx";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="doctors"
          element={
            <Layout>
              <Doctor />{" "}
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />{" "}
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
