import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CharacterDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.characterResult;

  useEffect(() => {
    if (!character) {
      navigate("/");
    }
  }, [character, navigate]);

  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={character?.image}
            className="img-fluid rounded-start"
            alt={character?.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{character?.name}</h5>
            <p className="card-text m-0">
              <small className="text-body-secondary">
                <b>Estado: </b>
                {character?.status}
              </small>
            </p>
            <p className="card-text m-0">
              <small className="text-body-secondary">
                <b>Género: </b>
                {character?.gender}
              </small>
            </p>
            <p className="card-text m-0">
              <small className="text-body-secondary">
                <b>Especie: </b>
                {character?.species}
              </small>
            </p>
            <p className="card-text m-0">
              <small className="text-body-secondary">
                <b>Origen: </b>
                {character?.origin?.name}
              </small>
            </p>
            <p className="card-text m-0">
              <small className="text-body-secondary">
                <b>Ubicación: </b> {character?.location?.name}
              </small>
            </p>
            <p className="card-text m-0">
              <small className="text-body-secondary">
                <b>Cantidad de episodios: </b> {character?.episode?.length}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
