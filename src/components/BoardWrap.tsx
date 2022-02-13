import * as React from 'react';
import { useState, useEffect } from 'react';
import { changeColorByDifference, randomRGB } from '../hooks/ChangeColor';
import Board from './Board';

interface BoardWrap {
  stage: number;
  clickAnswerSquare: React.MouseEventHandler<HTMLDivElement>;
  clickWrongAnswerSquare: React.MouseEventHandler<HTMLDivElement>;
}

function BoardWrap(props: BoardWrap) {

  const [numberOfSquare, setNumberOfSquare] = useState(4);
  const [answerIndex, setAnswerIndex] = useState(
    Math.floor(Math.random() * numberOfSquare)
  );

  const [color, setColor] = useState(() => randomRGB());
  const [difference, setDifference] = useState(128);
  const [differentColor, setDifferentColor] = useState(() =>
    changeColorByDifference(color, difference)
  );

  useEffect(() => {
    setNumberOfSquare(Math.pow(Math.round((stage + 0.5) / 2) + 1, 2));

    setColor(() => randomRGB());
  }, [stage]);

  React.useMemo(() => {
    setDifferentColor(() => changeColorByDifference(color, difference));
  }, [color]);


  return (
    <div
      style={{
        gridTemplateRows: `repeat(${Math.sqrt(numberOfSquare)},1fr)`,
        gridTemplateColumns: `repeat(${Math.sqrt(numberOfSquare)},1fr)`,
      }}
      className="board-wrapper"
    >
      {Array.from(Array(numberOfSquare)).map((_, index) =>
        index === answerIndex ? (
          <Board
            key={index}
            color={differentColor}
          ></Board>
        ) : (
          <Board
            key={index}
            color={color}
          ></Board>
        )
      )}
    </div>
  );
}

export default BoardWrap;
