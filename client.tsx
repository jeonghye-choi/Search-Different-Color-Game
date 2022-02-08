import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import SearchGame from './components/SearchGame';

const Hot = hot(SearchGame);

ReactDOM.render(<Hot />, document.querySelector('#root'));
