import "./App.css";
import Content from "./Components/Content/Content";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      {/* avec Content dans ThemeContext.Provider on aura au state créé dans Context */}
      <ThemeContextProvider>
        <Content></Content>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
