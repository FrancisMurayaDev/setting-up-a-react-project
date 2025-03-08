import {Fragment} from "react";

export default function AddNumbers ({number1, number2}) {
  const total = number1 + number2;
  return (
    <Fragment>
      The sum of {number1} and {number2} is equal to : {total}.
    </Fragment>
  )
}