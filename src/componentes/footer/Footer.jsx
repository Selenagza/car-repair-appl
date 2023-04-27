import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Diagnóstico de Motor</li>
          <li className="fListItem">Cambio de aceite</li>
          <li className="fListItem">Alineación y balanceo</li>
          <li className="fListItem">Reparación de frenos</li>
          <li className="fListItem">Lavado y encerado</li>
          <li className="fListItem">Análiis completo</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Servicio al Cliente</li>
          <li className="fListItem">Ayuda y Soporte</li>
          <li className="fListItem">Sucursales</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Términos y Condiciones</li>
          <li className="fListItem">Sustentabilidad</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Acerca de </li>
          <li className="fListItem">Bolsa de trabajo</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Redes Sociales</li>
          <li className="fListItem">Twitter</li>
          <li className="fListItem">Facebook</li>
          <li className="fListItem">Instagram</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Auto Repar Center </div>
    </div>
  );
};
