function Greet ({userName}) {
if (userName === undefined) {
  return <h1>Hello Guest</h1>;
} else {
  return <h1> Hello {userName}</h1>;
}
}

function DisplayVideo ({age}) {
  if (age <= 17) {
    return <p>Access Denied, Go and watch Tom and Jerry!</p>
  } else {
    return <iframe width="560" height="315" src="https://www.youtube.com/embed/G1p6rlDCxq0?si=Qlv0iyHOCOniXUFb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  }
}

function App () {
 return (
  <>
  <Greet />
  <Greet userName='Kamau' />
  <Greet userName={`Jose`} />
  <DisplayVideo age={12}/>
  <DisplayVideo age={22}/>
  </>
 )
}

export default App;