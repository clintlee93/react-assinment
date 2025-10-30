import Nav_bar from "./components/navigation.jsx";
import Button from "./components/common/button.jsx";
import logo from "./assets/1.png";
import Header from "./components/header.jsx";

function App() {
  return (
    <>
    <div >
      {/* <Nav_bar /> */}
      <Header />
      <Button />
      <img className=" " src={logo} alt="logo" />
      
    </div>
    </>
  );
}

export default App;