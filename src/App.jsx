import Button from "./Components/Button/Button";
import Greet from "./Components/Greet/Greet";
import BookCategoryCard from "./Components/BookCategoryCard/BookCategoryCard";
import {Fragment} from "react";
import AddNumbers from "./Components/AddNumbers/AddNumbers";

function App () {
  // const person1 = `John Doe`;
  // const person2 = `Martin Cruz`;
  // const person3 = 'Joe Doe';
  return (
    <Fragment>
    
      {/* <Greet name = {person1} email = 'email@.com' />
      <Greet name = {person2} email = {`email`} />
      <Greet name = {person3}/> */}

      <AddNumbers number1={5} number2={8}/>
      <AddNumbers number1={89} number2={89} />

    </Fragment>
  )
}

export default App;