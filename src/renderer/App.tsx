import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
// const Store = require('electron-store');

import './App.css';

function Hello() {
  // const [folder, setFolderPath] = React.useState('');
  // const { watchFolder } = window.electron;
  const { helloJo, setFolder, getFilePath } = window.electron2;
  const sayHello = () => {
    helloJo('jo');
  };

  const getFilePathSync = async () => {
    const path = await getFilePath();
    console.log(path);
  };

  const watch = () => {
    setFolder('/Users/iluca/OneDrive/Desktop');
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {/* <p>{folder}</p> */}
      <button onClick={watch} type="button">
        hi
      </button>
      <button onClick={getFilePathSync} type="button">
        getFilePath
      </button>
      <button onClick={sayHello} type="button">
        hello
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
