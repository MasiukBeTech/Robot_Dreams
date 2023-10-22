import { useState } from 'react'
import { Title } from './Title/Title.jsx'
import TitleFunc  from './Title/TitleFunc.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // const count = state[0];
  // const setCount = state[1];

  // let countMy = 10;
  // let setCountMy = () => {
  //   countMy++;
  //   console.log(countMy);
  //   setCount(countMy);
  // }

  let x = {
    a: '1',
    b: 6,
  };

  return (
    <div>
      <Title name="Roman" obj={x}>
        <span>Develorer</span>
      </Title>
      <Title name='Iryna'></Title>
      <Title name='Lina'>
        <span>SEO Director</span>
      </Title>
      <TitleFunc name="Roman" obj={{
         a: '10',
         b: 60,
       }}>
        <span>Develorer</span>
       </TitleFunc>
      <TitleFunc name='Iryna'></TitleFunc>
      <TitleFunc name='Lina'>
        <span>SEO Director</span>
      </TitleFunc>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
