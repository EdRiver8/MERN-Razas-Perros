import React from "react";
import CardRazasPerros from "../components/CardRazasPerros";
import borderCollie from "../media/borderCollie.jpg";
import rhodesian from "../media/rhodesian.jpg";

const Home = () => {
  return (
    <section>
      <h1>Razas de Perros</h1>
      <ul className="breedCardContainer">
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
        <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
        <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
        <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
        <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
      </ul>
    </section>
  );
};

export default Home;
