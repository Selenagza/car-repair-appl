import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Auto Repair Center</span>
          <div className="navItems">
            <button className="navButton">Registrarse</button>
            <button className="navButton">Inicio de Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};
