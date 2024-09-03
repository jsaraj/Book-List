import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OperationBook from './components/OperationBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold justify-center flex pt-20 ">Book List</h1>
      <h3 className='text-lg flex justify-center'>Add Your Book  with form below</h3>
      <OperationBook/>
    </>
  )
}

export default App
