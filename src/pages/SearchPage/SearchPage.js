export function SearchPage() {
  return (
    <main className="container h-full mx-auto flex flex-wrap flex-col items-center">
      <div className="flex-1 content-center flex items-center">
        <div className="flex flex-col items-end p-[50px]">
          <img
            className="self-center"
            alt="Buscar productos..."
            src="https://img.icons8.com/ios/500/000000/search--v4.png"
          />
          <div className="text-sm text-neutral-700">
            <a className="text-sky-600" href="https://icons8.com/icon/7eX13e1GI7bn/búsqueda">Búsqueda</a>{" "}
            icon by <a className="text-sky-600"  href="https://icons8.com">Icons8</a>
          </div>
        </div>
      </div>
    </main>
  );
}
