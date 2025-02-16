import { useState } from 'react';

export function useItunesSearch() {
  const [term, setTerm] = useState('');
  const [media, setMedia] = useState('');
  const [searchItems, setSearchItems] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const response = await fetch(
        `https://itunesapi-jbmf.onrender.com/api/search?media=${media}&term=${term}`
      );
      const data = await response.json();
      setSearchItems(data.results);
      setSearchCategory(media);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddFavorite = (result) => {
    const isFavorite = favorites.some(
      (favorite) => JSON.stringify(favorite) === JSON.stringify(result)
    );
    if (!isFavorite) {
      setFavorites((prev) => [...prev, result]);
    }
  };

  const handleRemoveFavorite = (item) => {
    const updatedList = favorites.filter(
      (favorite) => JSON.stringify(favorite) !== JSON.stringify(item)
    );
    setFavorites(updatedList);
  };

  return {
    term,
    setTerm,
    media,
    setMedia,
    searchItems,
    searchCategory,
    favorites,
    handleSearch,
    handleAddFavorite,
    handleRemoveFavorite,
  };
}