const CampoBusca = () => {
    return (
      <>
        <input
          type="text"
          onChange={(event) => handleBuscar(event.target.value)}
          placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        />
      </>
    );
  }

  export default CampoBusca