import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import Home from "../pages/Home.jsx";
import Doctor from "../pages/Doctor.jsx";
import NotFound from "../pages/Notfound.jsx";
import Layout from "../pages/Layout.jsx";
import Review from "../components/Review.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
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
          path="reviews"
          element={
            <Layout>
              <Review />
            </Layout>
          }
        />
        <Route
          path="doctors"
          element={
            <Layout>
              <Doctor />
            </Layout>
          }
        />
        <Route
          path="/Signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/Login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
