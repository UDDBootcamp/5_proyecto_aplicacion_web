import { Link } from "react-router-dom";

const CardCharacters = ({ characterResult }) => {
  return (
    <Link
      key={characterResult.id}
      state={{ characterResult }}
      to={`/ver-personaje/${characterResult.id}`}
    >
      <div className="card" style={{ width: "14rem" }}>
        <img src={characterResult.image} alt={characterResult.name} />
        <div className="card-body">
          <h5 className="card-title m-0">{characterResult.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p className="m-0">
              <b>Estado:</b> {characterResult.status}
            </p>
          </li>
          <li className="list-group-item">
            <p className="m-0">
              <b>Género:</b> {characterResult.gender}
            </p>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default CardCharacters;
