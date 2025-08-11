import { useState } from "react";
import { getFilteredCharacters } from "../api/api";
import CardCharacters from "../components/CardCharacters";

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
          <option value="">Seleccione</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
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
      {characterResult && <CardCharacters characterResult={characterResult} />}
    </div>
  );
}

export default Search;
