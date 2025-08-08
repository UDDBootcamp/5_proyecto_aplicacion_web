import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../api/api.jsx";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserData()
      .then((data) => setCharacters(data.results))
      .catch(() => setError("No se obtuvo el personaje"));
  }, []);

  if (error) return <p>{error}</p>;
  if (characters.length === 0) return <p>Cargando personajes...</p>;

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {characters.map((character) => (
        <Link
          key={character.id}
          state={{ character }}
          to={`/ver-personaje/${character.id}`}
        >
          <div className="card" style={{ width: "14rem" }}>
            <img src={character.image} alt={character.name} />
            <div className="card-body">
              <h5 className="card-title m-0">{character.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <p className="m-0">
                  <b>Estado:</b> {character.status}
                </p>
              </li>
              <li className="list-group-item">
                <p className="m-0">
                  <b>Género:</b> {character.gender}
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
