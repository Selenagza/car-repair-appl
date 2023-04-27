import "./inicio.css";
import { Navbar } from "../../componentes/navbar/Navbar";
import { Header } from "../../componentes/header/Header";
import { Featured } from "../../componentes/featured/Featured";
import { Tecnicos } from "../../componentes/tecnicos/Tecnicos";
import { Blog } from "../../componentes/blog/Blog";
import { MailList } from "../../componentes/mailList/MailList";
import { Footer } from "../../componentes/footer/Footer";

export const Inicio = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTile">Técnicos certificados</h1>
        <Tecnicos />
        <h1 className="homeTile">Últimos posts</h1>
        <Blog />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
