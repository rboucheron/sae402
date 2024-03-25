import { PropTypes } from "prop-types";
import { Model } from "./charete/Charete_sae";

function Objet() {
  return (
    <canvas>
      <Model />
    </canvas>
  );
}

Objet.propTypes = {
  glbFilePath: PropTypes.string.isRequired,
};

export default Objet;
