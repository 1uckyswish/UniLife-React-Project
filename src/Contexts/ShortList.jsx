import { useState, createContext, useEffect } from "react";

export const ShortList = createContext();

export default function ShortListProvider(props) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favs");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addHome = (homeToAdd) => {
    const newFavorites = [...favorites, homeToAdd];
    setFavorites(newFavorites);
    localStorage.setItem("favs", JSON.stringify(newFavorites));
  };

  const removeHome = (addedHomeId) => {
    const updatedFavorites = favorites.filter((item) => item._id !== addedHomeId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favs", JSON.stringify(updatedFavorites));
  };

  return (
    <ShortList.Provider value={{ favorites, addHome, removeHome }}>
      {props.children}
    </ShortList.Provider>
  );
}
