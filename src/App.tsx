import * as React from 'react';
import { useState, useEffect } from 'react';
import BoardWrap from './components/BoardWrap';
import Header from './components/Header';

function App() {
  const [stage, setStage] = useState(1);
  const [remainTime, setRemainTime] = useState(15);
  const [score, setScore] = useState(0);

  function clickAnswerSquare() {
    setStage((prevStage) => prevStage + 1);
    setScore((prevScore) => prevScore + Math.pow(stage, 3) * remainTime);
    setRemainTime(15);
  }
  function clickWrongAnswerSquare() {
    setRemainTime((prevTime) => (prevTime - 3 >= 0 ? prevTime - 3 : 0));
  }
  useEffect(() => {
    const timer = setInterval(() => {
      if (remainTime > 0) {
        setRemainTime((prevTime) => prevTime - 1);
      }
      if (remainTime <= 0) {
        clearInterval(timer);
        alert('Game Over!' + '\n' + `스테이지: ${stage}, 점수: ${score}`);
        setStage(1);
        setRemainTime(15);
        setScore(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainTime, stage]);

  return (
    <>
      <Header stage={stage} remainTime={remainTime} score={score} />
      <BoardWrap
        stage={stage}
        clickAnswerSquare={clickAnswerSquare}
        clickWrongAnswerSquare={clickWrongAnswerSquare}
      />
    </>
  );
}

export default App;
