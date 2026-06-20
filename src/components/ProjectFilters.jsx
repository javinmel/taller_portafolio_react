import "./ProjectFilters.css";

function ProjectFilters({ categorias, categoriaActiva, onFiltrar }) {
  return (
    <div className="filters">
      <button
        className={
          categoriaActiva === "Todas"
            ? "filters-btn filters-btn-active"
            : "filters-btn"
        }
        onClick={() => onFiltrar("Todas")}
      >
        Todas
      </button>
      {categorias.map((categoria) => (
        <button
          key={categoria}
          className={
            categoriaActiva === categoria
              ? "filters-btn filters-btn-active"
              : "filters-btn"
          }
          onClick={() => onFiltrar(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;
