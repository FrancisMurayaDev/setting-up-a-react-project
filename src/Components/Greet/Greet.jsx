import {Fragment} from "react";

function Greet ({name, email}) {

  const username = `Francis`;

  return (
    <Fragment>
      <p>Hello!, my name is {name}. My email is {email}</p>
     
    </Fragment>
  )
}

export default Greet