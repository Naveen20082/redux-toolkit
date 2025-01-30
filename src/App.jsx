import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/Slices/Inc_Dec'

function App() {
  const count = useSelector(state => state.count.value);
  const dispatch = useDispatch()

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Inc</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>dec</button>
      </div>
    </>
  )
}

export default App
