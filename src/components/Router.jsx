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
import Aboutus from "../pages/Aboutus.jsx";
import Appointments from "../pages/Appointments.jsx";
import SearchDoctor from "../pages/SearchDoctor.jsx";
import Legal from "../pages/Legal.jsx";
import DoctorsCard from "./DoctorsCard.jsx";
import PatientsCard from "./PatientsCard.jsx";


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
          path="/aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
<Route
          path="/appointments"
          element={
            <Layout>
              <Appointments />
              </Layout>
          }/>
=======

        <Route
          path="/reviews"
          element={
            <Layout>
              <Review />
            </Layout>
          }
        />
        <Route
          path="/doctors"
          element={
            <Layout>
              <Doctor />
            </Layout>
          }
        />
<Route
          path="/signup"
          element={
            <Layout>
             <Signup />
            </Layout>
          }
        />
          <Route
      path="/login"
      element={
        <Layout>
         <Login />
        </Layout>
      }
    />
              <Route
      path="/legal"
      element={
        <Layout>
         <Legal />
        </Layout>
      }
    />

      <Route
          path="/searchdoctor"
          element={
            <Layout>
              <SearchDoctor />
</Layout>}/>

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
          path="/doctors-profile"
          element={
            <Layout>
              <DoctorsCard />
            </Layout>
          }
        />
          <Route
          path="/patients-profile"
          element={
            <Layout>
              <PatientsCard />
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
