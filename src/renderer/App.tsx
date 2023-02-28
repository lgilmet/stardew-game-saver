import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import SaveList from './SaveList';

function Hello() {
  const [originFolder, setOriginFolderPath] = React.useState('');
  const [destFolder, setDestFolderPath] = React.useState('');
  const { setOriginFolder, getOriginFolder, setDestFolder, getDestFolder } =
    window.electron;

  const getOrigin = async () => {
    const folder = await getOriginFolder();
    if (folder) {
      setOriginFolderPath(folder);
    }
    console.log('originFolder: ', originFolder);
  };

  const setOrigin = async () => {
    setOriginFolder()
      .then((res) => {
        console.log('setOriginFolder res: ', res);
        getOrigin();
      })
      .catch((err: any) => console.log(err));
  };

  const getDest = async () => {
    const folder = await getDestFolder();
    if (folder) {
      setDestFolderPath(folder);
    }
    console.log('destFolder: ', destFolder);
  };
  const setDest = async () => {
    setDestFolder()
      .then((res) => {
        console.log('setDestFolder res: ', res);
        getDest();
      })
      .catch((err: any) => console.log(err));
  };

  const refresh = async () => {
    getOrigin();
    getDest();
  };

  // on load call getOrigin()
  React.useEffect(() => {
    getOrigin();
    getDest();
  }, []);

  return (
    <div>
      <button onClick={setOrigin} type="button">
        setOrigin
      </button>
      <button onClick={setDest} type="button">
        setDest
      </button>
      <p>origin: {originFolder}</p>
      <p>dest: {destFolder}</p>

      <button type="button" onClick={refresh}>
        refresh
      </button>

      <SaveList />
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
