import "./lista.css";
import { Navbar } from "../../componentes/navbar/Navbar";
import { Header } from "../../componentes/header/Header";
import { SearchItem } from "../../componentes/searchItem/SearchItem";

export const Lista = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Header type="lista" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Fabricante</label>
                <input type="text" />
              </div>
              <div className="lsItem">
                <label>Modelo</label>
                <input type="text" />
              </div>
              <div className="lsItem">
                <label>Año</label>
                <input type="text" />
              </div>
              <div className="lsItem">
                <label>Kilometraje</label>
                <input type="text" />
              </div>
              <button>Buscar</button>
            </div>
            <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
