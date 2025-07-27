import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import Layout from "./components/Layout";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLogoClick = () => {
    setSearchQuery("");
  };

  return (
    <Layout onSearch={handleSearch} onLogoClick={handleLogoClick}>
      <Routes>
        <Route path="/" element={<PokemonList searchQuery={searchQuery} />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
