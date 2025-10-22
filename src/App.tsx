import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-sans font-bold md:text-2xl mb-0 pl-4 tracking-wide drop-shadow-[4px_6px_0_rgba(0,0,0,0.6)]">
        Volkan Ozcomert's Company Presents:
      </div>
      <div className="font-sans font-bold md:text-9xl mb-4 pl-4 tracking-wide drop-shadow-[8px_10px_0_rgba(0,0,0,0.6)]">
        CINDERFORGE
      </div>
    </>
  )
}

export default App
