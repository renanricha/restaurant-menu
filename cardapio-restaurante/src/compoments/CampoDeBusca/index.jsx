export const CampoBusca = () => {
    return (
      <>
        <input
          type="text"
          onChange={(event) => handleBuscar(event.target.value)}
          placeholder="Pesquise um produto"
        />
      </>
    );
  }