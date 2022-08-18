import React from "react";
import { Link } from "react-router-dom";

const CardRazasPerros = (props) => {
  return (
    <li className="breedCard ">
      <Link to="/rhodesian">
        <div className="contenedorImagen">
          <img src={props.imagen} alt={props.nombreRaza} />
        </div>
        <span className="breedTitle">{props.nombreRaza}</span>
      </Link>
    </li>
  );
};

export default CardRazasPerros;
