import logo from "./logo.png";

function App(props) {
  return (<>
    <div className={"h-screen z-50 loader " + props.className}>
      <img src={logo} alt="Ariabyte Logo" className="h-16 m-auto centered" />
    </div>
  </>);
}

export default App;