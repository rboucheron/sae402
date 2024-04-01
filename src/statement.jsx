import Object from "./buggy/object";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

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
      <a href="#footer">
        <div className="fixed rounded-xl bottom-1 left-1 p-4 ">
          <ArrowDown color="#EE6C4D" />
        </div>
      </a>

      <Object />

      <h1 className=" w-3/4  m-auto text-center text-3xl text-blue font-bold mb-4 mt-2">
        {" "}
        Le buggy : un moyen de transport pour les gens du passé
      </h1>
      <p className="w-2/3 m-auto text-xl text-blue font-medium text-justify">
        Dans les vastes étendus rurales de l'Amérique, loin des routes
        encombrées et du vacarme des villes, réside une communauté enracinée
        dans le passé : les Amish. Originaires d'Alsace et de Suisse, ils sont
        issus du mouvement anabaptiste mennonite, qui rejette l'autorité de
        l'Église catholique, refuse les baptêmes d'enfant et prône un mode de
        vie simple. Ce mouvement, créé en 1525, a rapidement contraint ses
        adeptes à fuir les villes pour s'installer dans les campagnes à cause
        des nombreuses persécutions dont ils sont victimes. Ensuite, en 1540, la
        plupart des Anabaptistes rejoignent Menno Simmons, le pasteur le plus
        influent du mouvement. Il prône une séparation totale entre les croyants
        Anabaptistes et le reste du monde ; c’est la naissance du mouvement
        Mennonites. <br />
        Les Amish sont eux-mêmes un schisme de l’église Mennonites, ils se
        séparent du mouvement sous l’impulsion de Jakob Amman. Tout comme les
        anabaptistes, les Amish mènent une vie d'une grande simplicité. Ils
        vivent en communautés dans des fermes, ils pratiquent des métiers
        agricoles. Ils ont refusé d’adopter certaines technologies jugées trop
        risquées pour leur communauté, préférant préserver leur mode de vie, qui
        constitue une exception culturelle précieuse. <br /> Au cœur de leur
        mode de vie simple et traditionnel se trouve un élément iconique de leur
        quotidien : le buggy. C’est une sorte de chariot tiré par un cheval, il
        évite d’utiliser la voiture, objet interdit dans la plupart des
        communautés. Fabriqué artisanalement avec des matériaux authentiques
        comme le bois et le métal, chaque élément de ce véhicule est le fruit
        d'un savoir-faire ancestral, transmis de génération en génération. Le
        buggy est bien plus qu'un simple moyen de déplacement car il incarne la
        culture Amish. D’abord car c’est un véhicule non motorisé aujourd’hui
        rarement utilisé hors des communautés, cela montre bien le souhait de
        simplicité, de modestie et leur désir de préserver un mode de vie
        traditionnel. Contrairement aux voitures modernes, énergivores et
        polluantes, le buggy fonctionne en parfaite harmonie avec la nature,
        propulsé par la force des chevaux. <br />
        C’est aussi un élément emblématique de leur identité, lorsque les
        Américains croisent un buggy sur les routes de campagne, ils
        reconnaissent instantanément la présence des Amish. Il est fréquemment
        mis en avant dans des films et des séries pour les représenter, cet
        objet fait partie de la culture populaire. Il est aussi associé à la vie
        rurale, montrant le lien entre les Amish et leur héritage culturel.
        Maintenant, en croisant le chemin d'un buggy Amish, prenez le temps
        d'apprécier la simplicité de ce moyen de transport.
      </p>
    </>
  );
}

export default Statement;
