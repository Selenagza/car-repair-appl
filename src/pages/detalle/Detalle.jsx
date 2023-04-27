import "./detalle.css";
import { Navbar } from "../../componentes/navbar/Navbar";
import { Header } from "../../componentes/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MailList } from "../../componentes/mailList/MailList";
import { Footer } from "../../componentes/footer/Footer";

export const Detalle = () => {
  const photos = [
    {
      src: "/images/services/1.jpg",
    },
    {
      src: "/images/services/2.jpg",
    },
    {
      src: "/images/services/3.jpg",
    },
    {
      src: "/images/services/4.jpg",
    },
    {
      src: "/images/services/5.jpg",
    },
    {
      src: "/images/services/6.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="lista" />
      <div className="detalleContainer">
        <div className="detalleWrapper">
          <button className="reservaAhora">Reserva Aqui</button>
          <h1 className="detalleTitle">Afinación</h1>
          <div className="detalleAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Disponible en sucursal: Centro</span>
          </div>
          <span className="detalleTime">Tiempo estimado: 4 horas</span>
          <span className="detalleCost">Costo: $899 impuestos incluidos</span>
          <div className="detalleImages">
            {photos.map((photo) => (
              <div className="detalleImgWrapper">
                <img src={photo.src} alt="" className="detalleImg" />
              </div>
            ))}
          </div>
          <div className="servicioDetalle">
            <div className="servicioDetalleTexts">
              <h1 className="detalleTitle">Afinación</h1>
              <p className="detalleDesc">
                ¿Qué incluye el servicio de afinación? La afinación consiste en
                una revisión total del automóvil, principalmente de un cambio de
                bujías, filtros de aceite, filtros de gasolina, cambio de aceite
                y limpieza de válvulas. ¿Qué incluye el servicio de afinación?
                La afinación consiste en una revisión total del automóvil,
                principalmente de un cambio de bujías, filtros de aceite,
                filtros de gasolina, cambio de aceite y limpieza de válvulas.
                ¿Qué incluye el servicio de afinación? La afinación consiste en
                una revisión total del automóvil, principalmente de un cambio de
                bujías, filtros de aceite, filtros de gasolina, cambio de aceite
                y limpieza de válvulas
              </p>
            </div>
            <div className="servicioDetallePrecio">
              <h1>Afinación mayor o menor + ajuste de suspensión</h1>
              <span>
                ¡Cambia el aceite de tu auto con este único descuento solo para
                ti!
              </span>
              <h2>
                <b>$899</b> Regular $3,900
              </h2>
              <button>Reserva ahora!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
