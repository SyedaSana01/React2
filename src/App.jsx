
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({name:{firstName:'sana',lastName:'khazi'},company:'donno'});

  function change() {
    setUser(
      { name:{firstName:'syeda',lastName:'suhasana'},
        company: 'I work at ZTM'}
    );
  }

 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         User:{user.name.firstName} {user.name.lastName}
        </p>
        <p>Company:{user.company}</p>
        <button onClick={change}>Change Name</button>
      </div>
      
    </>
  )
}

export default App
