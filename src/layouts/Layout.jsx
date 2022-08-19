import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="mainConteiner">
      <Header />
      {/* children, trae la informacion del componente que esta dentro de layout en routes del app */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
