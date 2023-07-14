import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increaseBy, increment, reset } from "./store/counter";
import { useState } from "react";
import {  useContactUsMutation, useGetPokemonByNameQuery, useGetProductsByCategoriesQuery } from "./services";



function App() {
  const {count} = useSelector((state) => state.counter);
  const [valueBy, setValueBy] = useState(0);
  console.log(count);
  const body = {
    name: "John Doe",
    email: "j@t.com",
    phone_number: "08012345678",
    subject: "Hello",
    message: "Hello world",
  }

  const dispatch = useDispatch();
  const [contactUs] = useContactUsMutation();

  const handleContactUs = async () => {
    const res = await contactUs(body);
    console.log(res)
  }

  return (
    <>
      <h1>Here's our count app</h1>
      <h3>Count: {count} </h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increaseBy(parseInt(valueBy)))}>Increase by {valueBy} </button>
      <input type="number" onChange={(e) => setValueBy(e.target.value)} />
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button 
      onClick={handleContactUs}
      >Try contact us</button>
    </>
  );
}

export default App;
