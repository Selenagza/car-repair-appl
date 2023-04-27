import "./blog.css";

export const Blog = () => {
  return (
    <div>
      <div className="blog">
        <div className="blogItem">
          <img src="/images/blog/blog-2.jpg" alt="" className="blogImg" />
          <span className="blogName">
            Cómo cambiar el filtro de aire del motor?
          </span>
          <span className="blogDate"> Mar 17, 2023 </span>
          <span className="blogDesc">
            ¿Tu coche empieza a consumir más gasolina de la cuenta? ¿La potencia
            se está reduciendo? ¿Está expulsando más gases contaminantes de la
            cuenta?
          </span>
        </div>
        <div className="blogItem">
          <img src="/images/blog/blog-1.jpg" alt="" className="blogImg" />
          <span className="blogName">
            ¿Cómo limpiar el motor de tu coche de forma segura?
          </span>
          <span className="blogDate"> Mar 19, 2023 </span>
          <span className="blogDesc">
            Un lavado de motor es un lavado químico del interior del motor,
            previsto para eliminar lodos, depósitos y otros residuos acumulados
            en el motor.
          </span>
        </div>
        <div className="blogItem">
          <img src="/images/blog/blog-3.jpg" alt="" className="blogImg" />
          <span className="blogName">
            Cómo cambiar el filtro de gasolina, paso a paso
          </span>
          <span className="blogDate"> Mar 22, 2023 </span>
          <span className="blogDesc">
            Tener un filtro de combustible en buen estado es esencial para que
            el motor funcione adecuadamente.
          </span>
        </div>
        <div className="blogItem">
          <img src="/images/blog/blog-4.jpg" alt="" className="blogImg" />
          <span className="blogName">Cómo cambiar la batería del coche</span>
          <span className="blogDate"> Mar 24, 2023 </span>
          <span className="blogDesc">
            Si quieres ahorrarte el dinero que podría costarte llevar el coche
            al mecánico, aquí podrás aprender a quitar la batería y poner una
            nueva paso por paso
          </span>
        </div>
      </div>
    </div>
  );
};
