import "./searchItem.css";

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="/images/services/1.jpg" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Afinación</h1>
        <span className="siDetalle">
          ¿Qué incluye el servicio de afinación? La afinación consiste en una
          revisión total del automóvil, principalmente de un cambio de bujías,
          filtros de aceite, filtros de gasolina, cambio de aceite y limpieza de
          válvulas
        </span>
        <span className="siSucursal">Disponible en sucursal: Centro</span>
        <span className="siTiempo">Tiempo estimado: 4 horas</span>
        <span className="siCosto">Costo: $123 impuestos incluidos </span>
      </div>
      <div className="siDetails">
        <button className="siCheckButton">Reservar</button>
      </div>
    </div>
  );
};
