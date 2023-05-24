import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/search/:searchTerm" element={
          <div className="app-page">
          <Sidebar />
          <SearchPage />  
        </div>
        } />
        <Route path="/" element={<div className="app-page">
          <Sidebar />
          <Videos />
        </div>} />
      </Routes>
    </Router>
  );
}

export default App;
