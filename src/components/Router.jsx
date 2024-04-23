import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "../pages/Notfound.jsx";
import Layout from "../pages/Layout.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import AppointmentForm from "../pages/AppointmentForm.jsx";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Login"
          element={
            <Layout>
              {" "}
              <Login />{" "}
            </Layout>
          }
        />
        <Route
          path="/Signup"
          element={
            <Layout>
              {" "}
              <Signup />{" "}
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
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
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
