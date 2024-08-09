import { Header } from "./component";
import { Dashboard, Home, Project } from "./page";
import { initializeIconList } from "./utils/iconInitializer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main/theme.sass";
import "./styles/main/App.sass";

initializeIconList();

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
        <Header />
      </div>
    </Router>
  );
}

export default App;
