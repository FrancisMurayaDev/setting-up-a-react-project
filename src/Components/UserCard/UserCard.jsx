import {Fragment} from "react"

function UserCard ({firstName, secondName, age}) {
  return (
    <Fragment>
      <h1>Hello, my name is {firstName} {secondName}, I am {age} years old.</h1>
    </Fragment>
  )
  
}

export default UserCard;