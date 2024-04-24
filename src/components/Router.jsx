<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "../pages/Home.jsx";
import Doctor from "../pages/Doctor.jsx";
import NotFound from "../pages/Notfound.jsx";
import Layout from "../pages/Layout.jsx";
import Review from "../components/Review.jsx"
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "../pages/Notfound.jsx";
import Layout from "../pages/Layout.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import AppointmentForm from "../pages/AppointmentForm.jsx";
>>>>>>> 8f4e99dca015c93fb6cbdbc082c4e8e34bc7c016
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
<<<<<<< HEAD
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
=======
          path="/Login"
          element={
            <Layout>
              {" "}
              <Login />{" "}
>>>>>>> 8f4e99dca015c93fb6cbdbc082c4e8e34bc7c016
            </Layout>
          }
        />
        <Route
<<<<<<< HEAD
          path="doctors"
          element={
            <Layout>
              <Doctor />
            </Layout>
          }
        />

=======
          path="/Signup"
          element={
            <Layout>
              {" "}
              <Signup />{" "}
            </Layout>
          }
        />
>>>>>>> 8f4e99dca015c93fb6cbdbc082c4e8e34bc7c016
        <Route
          path="*"
          element={
            <Layout>
<<<<<<< HEAD
              <NotFound />{" "}
=======
              {" "}
              <AppointmentForm />{" "}
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              {" "}
              <Notfound />{" "}
>>>>>>> 8f4e99dca015c93fb6cbdbc082c4e8e34bc7c016
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 8f4e99dca015c93fb6cbdbc082c4e8e34bc7c016
export default Router;
