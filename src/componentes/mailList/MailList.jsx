import "./mailList.css";

export const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">No te pierdas nuestros descuentos!</h1>
      <span className="mailDesc">
        Recibe lo último directamente en tu bandeja de entrada
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Correo electrónico" />
        <button>Suscribirse</button>
      </div>
    </div>
  );
};
