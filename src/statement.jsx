import Object from "./buggy/object";
import { useState, useEffect } from "react";

function Statement() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(scrollY + window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <Object />

      <h1 className=" w-3/4  m-auto text-center text-3xl text-blue font-bold mb-4">
        {" "}
        Le buggy : un moyen de transport pour les gens du passé
      </h1>
      <p className="w-2/3 m-auto text-xl text-blue font-medium text-justify">
        Dans les vastes étendus rurales de l'Amérique, loin des routes
        encombrées et du vacarme des villes, se niche une communauté enracinée
        dans le passé : les Amish. Au cœur de leur mode de vie simple et
        traditionnel se trouve un élément iconique de leur quotidien : le buggy.
        <br></br>
        Imaginez-vous voguer à travers des champs verdoyants, le rythme régulier
        des sabots des chevaux accompagnant le doux cliquetis des roues sur les
        chemins de terre. À bord d'un buggy Amish, vous êtes transporté dans un
        autre temps, où la simplicité règne en maître. Fabriqué artisanalement
        avec des matériaux authentiques comme le bois et le métal, le buggy est
        bien plus qu'un simple moyen de déplacement pour les Amish.<br></br>{" "}
        C'est un symbole vivant de leur attachement aux traditions et à un mode
        de vie déconnecté de la fantaisie moderne. Contrairement aux voitures
        modernes, énergivores et polluantes, le buggy fonctionne en parfaite
        harmonie avec la nature, propulsé par la force tranquille des chevaux.
        Chaque élément de ce véhicule est le fruit d'un savoir-faire ancestral,
        transmis de génération en génération.<br></br> En croisant le chemin
        d'un buggy Amish, prenez le temps d'apprécier l'élégance simple de ce
        moyen de transport, et laissez-vous imprégner par l'atmosphère paisible
        qu'il véhicule. Car derrière chaque roue qui tourne se cache une
        histoire de tradition et de respect de la nature dans un mode de vie
        intemporel.
      </p>
    </>
  );
}

export default Statement;
