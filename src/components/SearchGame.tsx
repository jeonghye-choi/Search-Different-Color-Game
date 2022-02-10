import * as React from 'react';

function SearchGame() {
  return (
    <>
      <header>스테이지: 1, 남은 시간: 5, 점수: 0</header>
      <div
        style={{
          gridTemplateRows: 'repeat(2,1fr)',
          gridTemplateColumns: 'repeat(2,1fr)',
        }}
        className="board-wrapper"
      >
        <div style={{ backgroundColor: 'pink' }} className="board"></div>
        <div style={{ backgroundColor: 'violet' }} className="board"></div>
        <div style={{ backgroundColor: 'pink' }} className="board"></div>
        <div style={{ backgroundColor: 'pink' }} className="board"></div>
      </div>
    </>
  );
}

export default SearchGame;
