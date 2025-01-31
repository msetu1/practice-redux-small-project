import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"


function App() {
  const dispatch =useAppDispatch()
  const {count} =useAppSelector((state)=>state.counter)

  const handleIncrement=(amount:number)=>{
dispatch(increment(amount))
  }
  const handleDecrement=(amount:number)=>{
dispatch(decrement(amount))
  }
  

  return (
    <>
      <h2>Redux practice</h2>
      <button onClick={()=>handleIncrement(5)}>Increment by 5</button>
      <button onClick={()=>handleIncrement(1)}>Increment</button>
      <h3>{count}</h3>
      <button onClick={()=>handleDecrement(1)}>decrement</button>
      <button onClick={()=>handleDecrement(5)}>decrement by 5</button>
    </>
  )
}

export default App
