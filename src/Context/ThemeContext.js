import React, { createContext, useState } from "react";

// création d'un contexte / initialisation / mise en place du contexte
export const ThemeContext = createContext();

// création d'un composant avec du state. Ce state sera partagé avec tout le monde avec le state créé
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  if (theme) {
    document.body.classList.add("dark-body");
  } else {
    document.body.classList.remove("dark-body");
  }

  // ThemeContext.Provider = vient de la création du contexte, retourne le provider qui vient du contexte
  // Provider va apporter toutes les données dans l'application
  // les données ici sont : le thème
  // props.children : tous les enfants englober par Provider seront affichés dans props.children
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
