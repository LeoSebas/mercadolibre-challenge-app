import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { SearchResultsPage } from "./pages/SearchResultsPage/SearchResultsPage";

export default function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <SearchPage />}/>
        <Route path="/items" element={ <SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}