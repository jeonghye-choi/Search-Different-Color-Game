import * as React from 'react';

interface HeaderProps {
  stage: number;
  remainTime: number;
  score: number;
}

function Header(props: HeaderProps) {
  const { stage, remainTime, score } = props;

  return (
    <header>
      스테이지: {stage}, 남은 시간: {remainTime}, 점수: {score}
    </header>
  );
}

export default Header;
