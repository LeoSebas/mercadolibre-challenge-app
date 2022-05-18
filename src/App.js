import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { SearchResultsPage } from "./pages/SearchResultsPage/SearchResultsPage";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SearchPage />}/>
        <Route path="/items" element={ <SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}