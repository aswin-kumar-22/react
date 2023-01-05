import logo from './logo.svg';
import './App.css';
import New from './components/New';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keys from './components/Keys';
import Apidata from './components/Apidata';
import Mainrouter from './reactrouter/Mainrouter';

function App() {
  const colors={color:"red"}
  return (
    <>
    {/* <New name="blue" fonts="yellow"/>
    <New name="red" fonts="black"/> */}
    {/* <Keys></Keys> */}
    {/* <Apidata/> */}


    <Mainrouter/>


    </>
    
  );
}

export default App;
