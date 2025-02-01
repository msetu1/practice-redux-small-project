import { Button } from "./components/ui/button"
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
      <Button onClick={()=>handleIncrement(5)}>Increment by 5</Button>
      <Button onClick={()=>handleIncrement(1)}>Increment</Button>
      <h3>{count}</h3>
      <Button onClick={()=>handleDecrement(1)}>decrement</Button>
      <Button onClick={()=>handleDecrement(5)}>decrement by 5</Button>
    </>
  )
}

export default App
