import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../api/api.jsx";

const Home = () => {
  const [characterResults, setCharactersResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserData()
      .then((data) => setCharactersResults(data.results))
      .catch(() => setError("No se obtuvo el personaje"));
  }, []);

  if (error) return <p>{error}</p>;
  if (characterResults.length === 0) return <p>Cargando personajes...</p>;

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {characterResults.map((characterResult) => (
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
      ))}
    </div>
  );
};

export default Home;
