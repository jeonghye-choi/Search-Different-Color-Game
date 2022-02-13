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
  const { stage, clickAnswerSquare, clickWrongAnswerSquare } = props;
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
    if (stage === 1) {
      setDifference(128);
    } else {
      setDifference((prevDifference) => {
        if (prevDifference <= 1) return 1;
        return prevDifference - 9;
      });
    }
    setNumberOfSquare(Math.pow(Math.round((stage + 0.5) / 2) + 1, 2));
    setAnswerIndex(Math.floor(Math.random() * numberOfSquare));
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
            onClick={clickAnswerSquare}
          ></Board>
        ) : (
          <Board
            key={index}
            color={color}
            onClick={clickWrongAnswerSquare}
          ></Board>
        )
      )}
    </div>
  );
}

export default BoardWrap;
