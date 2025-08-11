import { useState, useEffect } from "react";
import { getUserData } from "../api/api.jsx";
import CardCharacters from "../components/CardCharacters.jsx";

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
        <CardCharacters characterResult={characterResult} />
      ))}
    </div>
  );
};

export default Home;
