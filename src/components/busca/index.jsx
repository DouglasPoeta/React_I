import React, { useState, useEffect } from "react";
import MediaCard from "../cards"; 
const GameDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/Games?title_like=${encodeURIComponent(searchTerm)}&_limit=1`
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar dados do servidor");
        }
        const data = await response.json();
        if (data.length > 0) {
          setSearchResult(data[0]); 
          setError(null);
        } else {
          setSearchResult(null);
          setError("Jogo não encontrado");
        }
      } catch (error) {
        setError(error.message);
        setSearchResult(null);
      }
    };
  
    if (searchTerm.trim() !== "") {
      fetchGame();
    } else {
      setSearchResult(null);
    }
  }, [searchTerm]);
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Pesquisar jogo"
      />
      {error && <div>Erro: {error}</div>}
      {searchResult && (
        <MediaCard
          title={searchResult.title}
          description={searchResult.description}
        />
      )}
    </div>
  );
};

export default GameDetails;
