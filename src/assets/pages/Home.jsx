import { useState, useEffect } from "react";
import { getUserData } from "../api/api.jsx";
import CardCharacters from "../components/CardCharacters.jsx";
import Spinner from "../components/Spinner.jsx";

const Home = () => {
  const [characterResults, setCharactersResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserData()
      .then((data) => setCharactersResults(data.results))
      .catch(() => setError("Error: No se obtuvieron los personajes"));
  }, []);

  if (error)
    return (
      <div class="alert alert-danger" role="alert">
        {error}
      </div>
    );
  if (characterResults.length === 0) return <Spinner />;

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {characterResults.map((characterResult) => (
        <CardCharacters
          key={characterResult.id}
          characterResult={characterResult}
        />
      ))}
    </div>
  );
};

export default Home;
