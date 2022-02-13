import * as React from 'react';
import { useState, useEffect } from 'react';

function App() {

  return (
    <>
      <BoardWrap
        stage={stage}
        clickAnswerSquare={clickAnswerSquare}
        clickWrongAnswerSquare={clickWrongAnswerSquare}
      />
    </>
  );
}

export default App;
