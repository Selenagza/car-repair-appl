import "./featured.css";

export const Featured = () => {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="/images/services/1.jpg"
            alt="Diagnostico"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Prueba de fugas</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="/images/services/2.jpg"
            alt="Balanceo"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Balanceo</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="/images/services/3.jpg"
            alt="Aceite"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Cambio de aceite</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="/images/services/4.jpg"
            alt="Frenos"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Ajuste de frenos</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
