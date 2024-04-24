import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className=" flex min-h-[100vh]  flex-col ">
      <Navbar/>
      <main className=" flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
