import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout({children}) {
  
  return (

    <div >
      <Nav  />
      <main className=" flex min-h-[100vh]  flex-col ">{children}</main>
      <Footer />
    </div>
  );

}

export default Layout;