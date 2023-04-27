import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCar,
  faCarSide,
  faOilCan,
  faRoad,
  faScrewdriverWrench,
  faSprayCanSparkles,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

export const Header = ({ type }) => {
  return (
    <div className="header">
      <div
        className={
          type === "lista" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faCar} />
            <span>Diagnóstico de motor</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faOilCan} />
            <span>Cambio de aceite</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCarSide} />
            <span>Alineación y balanceo</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <span>Reparación de frenos</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSprayCanSparkles} />
            <span>Lavado y encerado</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faToolbox} />
            <span>Análisis completo</span>
          </div>
        </div>
        {type !== "lista" && (
          <>
            <h1 className="headerTitle">Eficiencia y Rapidez</h1>
            <p className="headerDesc">
              Somos su mejor opción en servicio de reparación de automóviles
            </p>
            <button className="headerBtn">Inicia Sesión / Registrate</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCar} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Fabricante"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCar} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Modelo"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Año"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faRoad} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Kilometraje"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Buscar</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
