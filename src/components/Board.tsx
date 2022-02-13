import * as React from 'react';

interface BoardProps {
  color: number[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Board(props: BoardProps) {
  const { color, onClick } = props;

  return (
    <div
      className="board"
      style={{ backgroundColor: `rgb(${color.join(',')})` }}
      onClick={onClick}
    ></div>
  );
}

export default Board;
