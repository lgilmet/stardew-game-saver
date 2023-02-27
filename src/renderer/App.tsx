import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function Hello() {
  // const { watchFolder } = window.electron;
  const { helloJo, setFolder } = window.electron2;
  const sayHello = () => {
    helloJo('jo');
  };

  const watch = () => {
    // setFolder("C:\Users\iluca\OneDrive\Desktop");
    setFolder('/Users/iluca/OneDrive/Desktop');
  };
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={watch} type="button">
        hi
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
