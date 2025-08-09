import { useState } from "react";
import { Link } from "react-router-dom";
import { getFilteredCharacters } from "../api/api";

function Search() {
  const [character, setCharacter] = useState("");
  const [status, setStatus] = useState("");
  const [characterResult, setCharacterResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getFilteredCharacters(character, status);
      setCharacterResult(data.results[0]);
      setError(null);
    } catch (err) {
      setError("Personaje no encontrado");
      setCharacterResult(null);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="characterInput" className="form-label">
          <b>Indique el estado</b>
        </label>
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          aria-label="Default select example"
        >
          <option selected>Seleccione</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="characterInput" className="form-label">
          <b> Buscar por personaje</b>
        </label>
        <input
          type="text"
          className="form-control"
          id="characterInput"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          placeholder="Ingrese el nombre del personaje"
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {error && (
        <div class="alert alert-warning" role="alert">
          {error}
        </div>
      )}
      {characterResult && (
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
      )}
    </div>
  );
}

export default Search;
