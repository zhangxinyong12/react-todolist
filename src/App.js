import logo from './logo.svg';
import './App.scss';

import ListName from './views/name-list/name-list';
import { useState } from 'react';

const listArray = [
  { name: 'aa', age: '22' },
  { name: 'bb', age: '23' },
  { name: 'cc', age: '24' },
  { name: 'dd', age: '25' },
];



function App() {
  const [list, setList] = useState(listArray);
  return (
    <div className="App">
      <header className="App-header">
        <h2>ggg</h2>

        <ListName list={list} setList={setList}></ListName>
      </header>
    </div>
  );
}

export default App;
