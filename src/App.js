import './App.css';
import React from 'react'
import FunctionCard from './FunctionCard';

function App() {
  return (
    <div className="App">
      <h1 className="Title">Wigner Functions gallery</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <div className='Gallery'>
        <FunctionCard
          title='Wigner function'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          q={[1, 2, 3]}
          p={[2, 5, 3]}
          w={[[0, 0, 0],[0, 0, 0],[0, 0, 1]]}
        />
      </div>


    </div>
  );
}

export default App;