import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo__small.png";

export function Navbar() {
  ///  Ref para el input de la barra de búsqueda.
  const inputSearchRef = useRef();

  /// Navigate
  const navigate = useNavigate();

  function handleOnClickSearch() {
    const value = inputSearchRef.current.value;
    if (value !== null) {
      navigate(`items/?search=${value}&page=1`);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleOnClickSearch();
    }
  }

  return (
    <nav className="h-[70px] bg-mercadolibre py-0">
      <div className="container h-full mx-auto flex items-center">
        <Link to="/">
          <img className="mr-5" src={Logo} alt="Logo" />
        </Link>
        <div className="flex w-full ">
          <input
            id="searchInput"
            name="searchInput"
            className="w-full rounded-tl-md rounded-bl-md px-3"
            ref={inputSearchRef}
            placeholder="Nunca dejes de buscar"
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-gray-200 rounded-tr-md rounded-br-md"
            onClick={handleOnClickSearch}
          >
            <img
              className="h-[50px] w-[50px] self-center p-[10px]"
              alt="Buscar productos..."
              src="https://img.icons8.com/ios/50/000000/search--v4.png"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
