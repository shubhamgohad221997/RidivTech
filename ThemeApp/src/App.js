import "./App.css";
import { ThemeProvider } from "./Context/ThemeContext";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
    </div>
  );
}

export default App;
