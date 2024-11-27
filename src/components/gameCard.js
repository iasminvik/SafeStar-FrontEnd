import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px' }}>
      <h2>{game.nome}</h2>
      <img src={game.imagem1} alt={game.nome} style={{ width: '100%' }} />
      <p>{game.descricao}</p>
      {/* Renderizando outras imagens, se necessário */}
      {game.imagem2 && <img src={game.imagem2} alt={`${game.nome} - imagem 2`} style={{ width: '100%' }} />}
      {game.imagem3 && <img src={game.imagem3} alt={`${game.nome} - imagem 3`} style={{ width: '100%' }} />}
    </div>
  );
};

export default GameCard;
