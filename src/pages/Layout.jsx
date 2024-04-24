<<<<<<< HEAD
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className=" flex min-h-[100vh]  flex-col ">
      <Navbar/>
      <main className=" flex-1">{children}</main>
      <Footer />
    </div>
=======
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout({children}) {
  return (
    <>
      <div>
        <Nav />
        <main className="flex-1 min-h-screen">{children}</main>

        <Footer />
      </div>
    </>
>>>>>>> 8f4e99dca015c93fb6cbdbc082c4e8e34bc7c016
  );
}

export default Layout;
<<<<<<< HEAD
=======

>>>>>>> 8f4e99dca015c93fb6cbdbc082c4e8e34bc7c016
